import { RSI } from 'technicalindicators';

export const calculateRSI = (closes) => {
  return RSI.calculate({ values: closes, period: 14 }).pop();
};
