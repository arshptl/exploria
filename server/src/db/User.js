const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
        name: String,
        email: String,
});

module.exports = model('User', UserSchema);