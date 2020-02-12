const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VendorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    phone: {
        type: String
    },
    mobile: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    id: false,
    toObject: {
        virtuals: true,
        getters: true
    },
    toJSON: {
        virtuals: true,
        getters: true,
        setters: false
    },
    timestamps: true
})

// VendorSchema.pre('find', () => {
//     this.where({ isActive: { $ne: false }});
// });

module.exports = mongoose.model('Vendor', VendorSchema);