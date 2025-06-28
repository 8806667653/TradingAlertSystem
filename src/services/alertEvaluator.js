/**
 * Evaluate entry/exit alerts for a subscription based on RSI.
 * Returns an object describing the alert or null if no alert triggered.
 */
export const evaluateAlert = (rsi, sub) => {
  if (rsi < sub.entryThreshold) {
    console.log(`ENTRY ALERT: ${sub.ticker} RSI ${rsi.toFixed(2)} < ${sub.entryThreshold}`);
    return { type: 'entry', ticker: sub.ticker, rsi };
  }
  if (rsi > sub.exitThreshold) {
    console.log(`EXIT ALERT: ${sub.ticker} RSI ${rsi.toFixed(2)} > ${sub.exitThreshold}`);
    return { type: 'exit', ticker: sub.ticker, rsi };
  }
  return null;
};
