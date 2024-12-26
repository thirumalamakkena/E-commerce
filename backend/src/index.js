import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connectDb } from './config/dbConenction.js';
import auth from './routes/auth.routes.js';
import user from './routes/user.routes.js';
import product from './routes/product.routes.js';
import cart from './routes/cart.routes.js';

const app = express();

// Middleware
app.use(
    cors({
        origin: 'http://localhost:3000', // Update for your frontend
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.get('/', (req, res) => res.json("I'm coming from backend"));

app.use('/api/auth/', auth);
app.use('/api/user/', user);
app.use('/api/product/', product);
app.use('/api/cart/', cart);

// 404 Handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found. Please check the URL and try again.',
    });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        success: false,
        message: 'Internal server error.',
        error: err.message,
    });
});

// Start Server
connectDb()
    .then(() => {
        app.listen(7000, () => {
            console.log(`Server running on port 7000`);
        });
    })
    .catch((error) => {
        console.error('Failed to connect to the database. Server not started.', error);
    });
