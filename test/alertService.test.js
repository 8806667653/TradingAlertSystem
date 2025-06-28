import { calculateRSI } from '../src/utils/rsiCalculator.js';
import { evaluateAlert } from '../src/services/alertEvaluator.js';

describe('RSI calculation', () => {
  it('calculates RSI value', () => {
    const closes = [46,45,44,43,42,41,40,39,38,37,36,35,34,33,32];
    const rsi = calculateRSI(closes);
    expect(rsi).toBeLessThan(30);
  });
});

describe('Alert evaluation with custom thresholds', () => {
  const sub = { ticker: 'TEST', entryThreshold: 40, exitThreshold: 60 };

  it('returns entry alert when below entry threshold', () => {
    const alert = evaluateAlert(35, sub);
    expect(alert).toEqual({ type: 'entry', ticker: 'TEST', rsi: 35 });
  });

  it('returns exit alert when above exit threshold', () => {
    const alert = evaluateAlert(65, sub);
    expect(alert).toEqual({ type: 'exit', ticker: 'TEST', rsi: 65 });
  });

  it('returns null when within thresholds', () => {
    const alert = evaluateAlert(50, sub);
    expect(alert).toBeNull();
  });
});
