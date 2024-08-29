const User = require('../models/userModel');
const { validationResult } = require('express-validator');

// Get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new user
exports.createUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, password } = req.body;

    try {
        const newUser = new User({ firstName, lastName, email, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a user
// exports.deleteUser = async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         await user.remove();
//         res.json({ message: 'User deleted' });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Export users data as CSV
exports.exportUsers = async (req, res) => {
    try {
        console.log(req.body.ids); // Log the received IDs
        const users = await User.find({ _id: { $in: req.body.ids } });
        let csv = 'id,email,first_name,last_name\n';
        users.forEach(user => {
            csv += `${user._id},${user.email},${user.firstName},${user.lastName}\n`;
        });
        res.header('Content-Type', 'text/csv');
        res.attachment('users.csv');
        res.send(csv);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
