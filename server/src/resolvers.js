const { authenticated, authorized } = require("./auth");
const { model } = require("mongoose");
const User = require("./db/User");

module.exports = {
  Query: {
    me: authenticated(async (_, { ID }, { user, models }) => {
      const userr = await models.User.findById(ID);
      if (userr) {
        return userr;
      } else {
        console.log("user not found");
        return { error: "user not found" };
      }
    }),

    async users(_, __, {user, models}) {
      try {
        const users = await models.User.findAll();
        return users;
      }
      catch(e){
        return { "error": e };
      }
    }
  },
  Mutation: {
    async signup(_, { input }, { models, createToken }) {
      console.log(input.name);
      const existing = await models.User.findOne({ email: input.email });
      // console.log();
      if (existing.length !== 0) {
        throw new Error("User already exists");
      }

      // let user = new User({
      //   ...input,
      // });

      // user.save();

      let user = await models.User.createOne(input);

      // const user = await models.User.createOne(...input);
      // const user = models.User.createOne({
      //   ...input,
      //   verified: false,
      //   avatar: "http",
      // });
      const token = createToken(user);
      // models.Settings.createOne({
      //   user: user.id,
      //   theme: "DARK",
      //   emailNotifications: true,
      //   pushNotifications: true,
      // });
      return { token, user };
    },
  },
};
