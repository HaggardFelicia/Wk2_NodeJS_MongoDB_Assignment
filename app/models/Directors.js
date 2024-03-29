const mongoose = require('mongoose');

const directorsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'You are required to have a director'],
            unique: true,
            trim: true,
            maxlength: [50, 'Name cannot be more than 50 characters'],
        },
        age: {
            type: Number,
            required: [true, 'You are required to have an age'],
        },
        email: {
            type: String,
            match: [
                /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                'Please fill a valid email address',
            ],
            unique: true,
        },
        Biography: {
            type: String,
            required: [true, 'You are required to have a description'],
            maxlength: [500, 'Description cannot be more than 500 characters'],
            trim: true,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Director', directorsSchema);