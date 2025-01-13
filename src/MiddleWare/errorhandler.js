// Middleware for handling errors
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
};

export default errorHandler;  // Export the error handler as default
