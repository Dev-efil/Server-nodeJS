const express = require('express');
const app = express();
const cors = require('cors');

const routeReg = require('./route/api/register');
const routeAuth = require('./route/api/auth');

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Route Middleware
app.use('/api/register', routeReg);
app.use('/api/auth', routeAuth);


app.listen(PORT, () => console.log(`Server stared on port: ${PORT}`));