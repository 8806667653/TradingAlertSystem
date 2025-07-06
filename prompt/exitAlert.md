Enhance the existing Smart Entry Alert System with additional features to make it more robust.

1. Add logic to calculate the RSI continuously, and when RSI crosses **above 70**, consider it an 'exit' signal. Log this event and notify the user.
2. Allow users to **configure their own RSI thresholds** (entry and exit) when subscribing to a stock.
3. Modify the MongoDB schema to store these user-defined thresholds along with the stock symbol.
4. Update the alert logic to use the user’s custom thresholds instead of hardcoded 30/70.
5. Ensure error handling if RSI data is missing or invalid.
6. Add a Jest unit test that validates correct alerts are generated based on the custom thresholds.
7. Please update the documentation/comments in relevant functions.

Use async/await and modular services. Keep the code structured and scalable.
If needed, explain any assumptions you make.