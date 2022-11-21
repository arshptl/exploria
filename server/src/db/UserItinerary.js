const { model, Schema } = require("mongoose");

const UserItinerarySchema = new Schema({
    createdAt: String,
    updatedAt: String,
    title: String,
    days: String,
    cost: String,
    place: String,
    attactions: [Object],
    flight: String,
});

module.exports = model("UserItinerary", UserItinerarySchema);
