const { model, Schema } = require("mongoose");

const AttractionSchema = new Schema({
    name: String,
    category: String,
    description: String,
    location: String,
    photoUrl: String,
    time: String,
});

module.exports = model("Attraction", AttractionSchema);
