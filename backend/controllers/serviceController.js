const Service = require("../models/serviceModel");

// Get all services
const getServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving services", error });
    }
};

// Create a new service
const createService = async (req, res) => {
    try {
        const { name, description } = req.body;
        const newService = new Service({ name, description });
        await newService.save();
        res.json(newService);
    } catch (error) {
        res.status(400).json({ message: "Error creating service", error });
    }
};

// Update a service
const updateService = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedService = await Service.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedService);
    } catch (error) {
        res.status(400).json({ message: "Error updating service", error });
    }
};

// Delete a service
const deleteService = async (req, res) => {
    try {
        const { id } = req.params;
        await Service.findByIdAndDelete(id);
        res.json({ message: "Service deleted" });
    } catch (error) {
        res.status(400).json({ message: "Error deleting service", error });
    }
};

module.exports = { getServices, createService, updateService, deleteService };
