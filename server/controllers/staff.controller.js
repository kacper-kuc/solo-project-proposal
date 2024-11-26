const Staff = require('../models/Staff');

module.exports.createStaff = async (req, res) => {
    try {
        const newStaff = await Staff.create(req.body);
        res.status(201).json(newStaff);
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports.getAllStaff = async (req, res) => {
    try {
        const staff = await Staff.find();
        res.status(200).json(staff);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports.updateStaff = async (req, res) => {
    try {
        const updatedStaff = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedStaff);
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports.deleteStaff = async (req, res) => {
    try {
        await Staff.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json(err);
    }
};