You are an expert backend engineer and trading strategist. Help me build a Smart Entry Alert System for stock trading.

Goal:
Build a backend system in Node.js using Express and MongoDB that monitors stock prices and alerts users when a stock’s RSI (Relative Strength Index) drops below 30 — a common 'buy' signal.

Tech Stack:
- Node.js, Express
- MongoDB
- Alpha Vantage or any public stock data API
- JWT for authentication
- Bcrypt for password hashing
- Joi for input validation
- Jest for unit testing

Requirements:
1. Create user registration and login endpoints with hashed passwords and JWT.
2. Allow users to subscribe to ticker symbols.
3. Periodically fetch historical price data using Alpha Vantage API.
4. Calculate the 14-day RSI using the `technicalindicators` npm package.
5. When RSI < 30, trigger an alert for subscribed users (just log for now).
6. Organize code in controller-service-repository structure.
7. Use async/await and handle errors gracefully.
8. Include 1–2 Jest unit tests for the alert logic.

Extras:
- Explain each module you generate
- If something is unclear, ask for clarification
- Use ES6 syntax and clean folder structure

Start by planning the architecture and generating the core folder and file layout.
