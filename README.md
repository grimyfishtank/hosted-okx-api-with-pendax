# Hosted OKX API With PENDAX

This repository hosts a Node.js API that interfaces with the OKX exchange using the PENDAX SDK. It allows users to execute various operations such as placing orders, fetching account balances, market data, and current positions. This repository is an excellent starting point for creating your own hosted API systems for OKX with the PENDAX SDK. You can easily add other functions included in the SDK using this template.

## Features

- Place orders on OKX
- Retrieve account balances
- Fetch market data (tickers)
- Get current positions

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What you need to install the software:

- Node.js
- npm
- Git

### Installing

A step-by-step series of examples that tell you how to get a development environment running:

Clone the repo:
   ```bash
   git clone https://github.com/your-username/hosted-okx-api-with-pendax.git

Navigate to the project directory:
cd hosted-okx-api-with-pendax

Install Dependencies
npm install

Create a .env file with your OKX API credentials:
OKX_API_KEY=your_okx_api_key
OKX_API_SECRET=your_okx_api_secret
OKX_PASSPHRASE=your_okx_passphrase

Start The Server:
node app.js

API Documentation
1. Place Order
Endpoint: POST /placeOrder

Body:

symbol (string): The symbol to trade (e.g., 'BTC-USDT').
side (string): 'buy' or 'sell'.
type (string): 'market' or 'limit'.
price (number, optional): Price for limit orders.
size (number): Size of the order.
2. Get Account Balances
Endpoint: GET /getBalances

Fetches the account balances from OKX.

3. Get Market Tickers
Endpoint: GET /getTickers

Fetches available market tickers. Optionally pass instType as a query parameter to filter by instrument type.

4. Get Current Positions
Endpoint: GET /getPositions

Retrieves the current trading positions.
