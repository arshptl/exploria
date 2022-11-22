const { model, Schema } = require("mongoose");

const UserItinerarySchema = new Schema({
  createdAt: String,
  updatedAt: String,
  title: String,
  days: String,
  cost: String,
  place: String,
  attractions: [
    {
      id: String,
      name: String,
      category: String,
      location: String,
    },
  ],
  flight: String,
});

module.exports = model("UserItinerary", UserItinerarySchema);
