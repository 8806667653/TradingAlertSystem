import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  ticker: { type: String, required: true },
  entryThreshold: { type: Number, default: 30 },
  exitThreshold: { type: Number, default: 70 },
});

export default mongoose.model('Subscription', subscriptionSchema);
