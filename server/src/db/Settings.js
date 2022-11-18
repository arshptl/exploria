const { model, Schema } = require("mongoose");

const SettingsSchema = new Schema({
    user: String,
    theme: String,
    emailNotifications: Boolean
});

module.exports = model("Settings", SettingsSchema);
