const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
        name: String,
        email: String,
        password: String,
        // history: [
        //         {
        //                 type: Schema.Types.ObjectId,
        //                 ref: "Places"
        //         }
        // ]
});

module.exports = model('User', UserSchema);