import { fetchDailyClose } from './stockService.js';
import { findAll } from '../repositories/subscriptionRepository.js';
import { calculateRSI } from '../utils/rsiCalculator.js';

export const checkAlertForTicker = async (ticker) => {
  const closes = await fetchDailyClose(ticker);
  const rsi = calculateRSI(closes);
  if (rsi !== undefined && rsi < 30) {
    console.log(`ALERT: RSI of ${ticker} is ${rsi.toFixed(2)} < 30`);
    return true;
  }
  return false;
};

export const alertSubscribers = async () => {
  const subs = await findAll();
  const tickers = [...new Set(subs.map((s) => s.ticker))];
  for (const ticker of tickers) {
    await checkAlertForTicker(ticker);
  }
};
