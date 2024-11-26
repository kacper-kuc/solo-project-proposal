const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [1, 'Name must be at least 1 character long'],
        maxlength: [40, 'Name must be less than 40 characters']
    },
    specialties: {
        type: String,
        required: [true, 'Specialties are required']
    },
    bio: {
        type: String,
        required: [true, 'Bio is required'],
        minlength: [4, 'Bio must be at least 4 characters long']
    }
}, { timestamps: true });

module.exports = mongoose.model('Staff', StaffSchema);