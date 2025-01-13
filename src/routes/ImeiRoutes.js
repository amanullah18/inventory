// routes/ImeiRoutes.js
import express from 'express';  // Import express
import imeiController from '../controllers/imeiTrackingController.js';  // Import the controller

const router = express.Router();
// Define the routes
router.get('/', imeiController.getAllIMEI);  // Get all IMEI records
router.post('/', imeiController.addIMEI);  // Add a new IMEI record
router.get('/:id', imeiController.getIMEIById);  // Get a single IMEI record by ID
router.put('/:id', imeiController.updateIMEI);  // Update an IMEI record by ID
router.delete('/:id', imeiController.deleteIMEI);  // Delete an IMEI record by ID

// Export the router
export default  router;
