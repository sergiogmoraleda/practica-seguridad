const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;

const userSchema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        username: {
            type: String, 
            required: true
        },
        password: {
            type: String,
            required: true
        }, 
        admin: {
            type: Boolean,
            default: false
        }
});

userSchema.pre("save", function(next) {
    const user = this;
    if (!user.isModified("password")) return next();
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});
const Model = mongoose.model("User", userSchema);
module.exports = Model;

