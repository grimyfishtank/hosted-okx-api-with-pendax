const express = require('express');
const { createExchange } = require('@compendiumfi/pendax');
require('dotenv').config();

const app = express();
app.use(express.json());

// Initialize the OKX exchange object using PENDAX SDK
const okxClient = createExchange({
    exchange: "okx",
    authenticate: true,
    key: process.env.OKX_API_KEY,
    secret: process.env.OKX_API_SECRET,
    passphrase: process.env.OKX_PASSPHRASE,
    label: "okx",
    marginType: "usdt"
});

// API endpoint to place an order
app.post('/placeOrder', async (req, res) => {
    try {
        const { symbol, side, type, price, size } = req.body;
        if (!symbol || !side || !type || !size) {
            return res.status(400).send({ message: "Missing required order parameters." });
        }
        const result = await okxClient.placeOrder({ instId: symbol, tdMode: 'cash', side, ordType: type, px: price, sz: size });
        return res.status(200).send(result);
    } catch (error) {
        console.error(`Error placing order: ${error.message}`);
        return res.status(500).send({ message: "Error placing order." });
    }
});

// API endpoint to get account balances
app.get('/getBalances', async (req, res) => {
    try {
        const balances = await okxClient.getBalances();
        return res.status(200).send(balances);
    } catch (error) {
        console.error(`Error fetching account balances: ${error.message}`);
        return res.status(500).send({ message: "Error fetching account balances." });
    }
});

// API endpoint to get available markets (tickers)
app.get('/getTickers', async (req, res) => {
    try {
        const options = req.query.instType ? { instType: req.query.instType } : {};
        const tickers = await okxClient.getTickers(options);
        return res.status(200).send(tickers);
    } catch (error) {
        console.error(`Error fetching tickers: ${error.message}`);
        return res.status(500).send({ message: "Error fetching tickers." });
    }
});

// API endpoint to get current positions
app.get('/getPositions', async (req, res) => {
    try {
        const positions = await okxClient.getPositions();
        return res.status(200).send(positions);
    } catch (error) {
        console.error(`Error fetching current positions: ${error.message}`);
        return res.status(500).send({ message: "Error fetching current positions." });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
