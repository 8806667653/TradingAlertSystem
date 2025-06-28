import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cron from 'node-cron';
import app from './app.js';
import { scheduleAlerts } from './utils/scheduler.js';

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

async function start() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    cron.schedule('0 * * * *', scheduleAlerts); // run hourly
  } catch (err) {
    console.error('Failed to start server', err);
  }
}

start();
