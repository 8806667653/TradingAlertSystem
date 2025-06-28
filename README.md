# Trading Alert System

This backend monitors RSI values for subscribed stock tickers and logs entry/exit alerts based on configurable RSI thresholds.

## Setup
1. Install dependencies
   ```bash
   npm install
   ```
2. Create a `.env` file (already provided) with MongoDB and API keys.
3. Start the server
   ```bash
 npm start
  ```

Users can subscribe to tickers with optional `entryThreshold` and `exitThreshold` values:
```bash
POST /api/subscriptions
{
  "ticker": "AAPL",
  "entryThreshold": 35,
  "exitThreshold": 65
}
```

## Testing
Run Jest tests:
```bash
npm test
```
