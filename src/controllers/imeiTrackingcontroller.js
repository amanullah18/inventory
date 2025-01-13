import db from '../config/database.js';  // Import the database connection

// Fetch All Records
const getAllIMEI = (req, res) => {
    db.query('SELECT * FROM imeitracking', (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query error' });
        }
        res.status(200).json(results);
    });
};

// Add New Record
const addIMEI = (req, res) => {
    const {
        subCatName,
        productName,
        IMEI1,
        IMEI2,
        branchID,
        orderID,
        temparoryOrderID,
        BranchDate,
        orderDate,
        voID,
        voName
    } = req.body;

    // Basic validation to ensure fields are not empty
    if (!subCatName || !productName || !IMEI1 || !IMEI2 || !branchID || !orderID || !BranchDate || !orderDate || !voID || !voName) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Constructing the data object to insert into the database
    const data = {
        subCatName,
        productName,
        IMEI1,
        IMEI2,
        branchID,
        orderID,
        temparoryOrderID,
        BranchDate,
        orderDate,
        voID,
        voName
    };

    // Insert query using SET syntax
    const query = 'INSERT INTO imeitracking SET ?';
    db.query(query, data, (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ error: 'Failed to insert data', details: err.message });
        }
        res.status(201).json({ message: 'IMEI record added successfully', trackingID: result.insertId });
    });
};

// Get Single Record
const getIMEIById = (req, res) => {
    const { id } = req.params;

    db.query('SELECT * FROM imeitracking WHERE trackingID = ?', [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Database query error' });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'Record not found' });
        }
        res.status(200).json(result[0]);
    });
};

// Update Record
const updateIMEI = (req, res) => {
    const { id } = req.params;
    const data = req.body;

    db.query('UPDATE imeitracking SET ? WHERE trackingID = ?', [data, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to update data' });
        }
        res.status(200).json({ message: 'Record updated successfully' });
    });
};

// Delete Record
const deleteIMEI = (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM imeitracking WHERE trackingID = ?', [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to delete data' });
        }
        res.status(200).json({ message: 'Record deleted successfully' });
    });
};

// Export functions as named exports
export default {
    getAllIMEI,
    addIMEI,
    getIMEIById,
    updateIMEI,
    deleteIMEI
};
