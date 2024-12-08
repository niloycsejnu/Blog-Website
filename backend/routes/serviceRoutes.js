const express = require("express");
const {
    getServices,
    createService,
    updateService,
    deleteService,
} = require("../controllers/serviceController");
const router = express.Router();

// Get all services
router.get("/", getServices);

// Create a new service
router.post("/", createService);

// Update an existing service
router.put("/:id", updateService);

// Delete a service
router.delete("/:id", deleteService);

module.exports = router;
