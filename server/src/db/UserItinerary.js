const { model, Schema } = require("mongoose");

const UserItinerarySchema = new Schema({
    createdAt: Date,
    updatedAt: Date,
    title: String,
    days: String,
    cost: String,
    place: String,
    attactions: [Object],
    flight: String,
});

module.exports = model("UserItinerary", UserItinerarySchema);
