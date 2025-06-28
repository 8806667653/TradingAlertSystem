import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.ALPHA_VANTAGE_KEY;

export const fetchDailyClose = async (symbol) => {
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`;
  const { data } = await axios.get(url);
  const timeSeries = data['Time Series (Daily)'];
  if (!timeSeries) throw new Error('Invalid data from API');
  const closes = Object.values(timeSeries).slice(0, 14).map(day => parseFloat(day['4. close'])).reverse();
  return closes;
};
