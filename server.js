import dotenv from 'dotenv';  // Import dotenv
import express from 'express';  // Import express
import bodyParser from 'body-parser';  // Import body-parser
import imeiRoutes from './src/routes/ImeiRoutes.js';  // Import routes (with .js extension)
import errorHandler from './src/MiddleWare/errorhandler.js';  // Import error handler (with .js extension)


// Load environment variables
dotenv.config();

const app = express();
// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/imei', imeiRoutes);

// Error Handler
app.use(errorHandler);
// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
