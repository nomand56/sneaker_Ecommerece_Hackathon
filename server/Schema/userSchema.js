let mongoose = require('mongoose');

let User = mongoose.model("user", {
    name: String,
    password: String,
    email: String,
    role: String,
    avatar: String
});

module.exports = User;