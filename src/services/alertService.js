import { fetchDailyClose } from './stockService.js';
import { findAll } from '../repositories/subscriptionRepository.js';
import { calculateRSI } from '../utils/rsiCalculator.js';
import { evaluateAlert } from './alertEvaluator.js';

/**
 * Compute the latest RSI for a ticker.
 * Throws an error if RSI data is missing or invalid.
 */
export const computeRsiForTicker = async (ticker) => {
  const closes = await fetchDailyClose(ticker);
  const rsi = calculateRSI(closes);
  if (rsi === undefined || Number.isNaN(rsi)) {
    throw new Error('Invalid RSI data');
  }
  return rsi;
};

export const alertSubscribers = async () => {
  // group subscriptions by ticker and evaluate RSI once per ticker
  const subs = await findAll();
  const tickers = [...new Set(subs.map((s) => s.ticker))];
  for (const ticker of tickers) {
    const tickerSubs = subs.filter((s) => s.ticker === ticker);
    try {
      const rsi = await computeRsiForTicker(ticker);
      tickerSubs.forEach((sub) => evaluateAlert(rsi, sub));
    } catch (err) {
      console.error(`Failed RSI for ${ticker}`, err.message);
    }
  }
};
