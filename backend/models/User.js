const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name: {
        type: String
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
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
        setters: true
    },
    timestamps: true
});

// UserSchema.pre('find', () => {
//     this.where({ isActive: { $ne: false }});
// })

var validatePresenceOf = (value) => {
    return value && value.length;
}

UserSchema.pre('save', (next) => {
    if(!this.isNew) return next();
    
    if(!validatePresenceOf(this.password)){
        next();
    } else {
        this.newPassword = this.password || process.env.DEFAULT_PASS;
        this.password = bcrypt.hashSync(this.newPassword, 8);
        return next();
    }
});

module.exports = mongoose.model('User', UserSchema);