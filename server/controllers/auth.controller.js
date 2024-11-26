const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports.register = async (req, res) => {
    const { email, password } = req.body;
    try {
        const newUser = await User.create({ email, password });
        res.status(201).json({ message: 'User registered successfully', newUser });
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
        }
        res.status(200).json({ message: 'Login successful', user });
    } catch (err) {
        res.status(500).json(err);
    }
};