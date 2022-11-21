const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
        name: String,
        email: String,
        password: String,
        history: [String],
});

module.exports = model('User', UserSchema);