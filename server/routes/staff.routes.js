const express = require('express');
const router = express.Router();
const { createStaff, getAllStaff, updateStaff, deleteStaff } = require('../controllers/staff.controller');

router.post('/add', createStaff);
router.get('/', getAllStaff);
router.put('/:id/edit', updateStaff);
router.delete('/:id', deleteStaff);

module.exports = router;