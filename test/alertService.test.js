import { calculateRSI } from '../src/utils/rsiCalculator.js';

describe('RSI calculation', () => {
  it('triggers alert when RSI < 30', () => {
    const closes = [45,44,43,42,41,40,39,38,37,36,35,34,33,32];
    const rsi = calculateRSI(closes);
    expect(rsi).toBeLessThan(30);
  });
});
