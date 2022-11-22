const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  history: [
    {
      type: Schema.Types.ObjectId,
      ref: "useritineraries",
    },
  ],
});

module.exports = model('User', UserSchema);