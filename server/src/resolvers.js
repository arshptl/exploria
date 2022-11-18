const { authenticated, authorized } = require("./auth");

module.exports = {
  Query: {
    me: authenticated((_, __, { user }) => {
      console.log("user in me query", user);
      return user;
    }),

    async users(_, __, { user, models }) {
      try {
        const users = await models.User.findAll();
        return users;
      } catch (e) {
        return { error: e };
      }
    },
  },
  Mutation: {
    async signup(_, { input }, { models, createToken }) {
      console.log(input.name);
      const existing = await models.User.findOne({ email: input.email });
      if (existing.length !== 0) {
        throw new Error("User already exists");
      }

      let user = await models.User.createOne(input);

      // const user = await models.User.createOne(...input);
      // const user = models.User.createOne({
      //   ...input,
      //   verified: false,
      //   avatar: "http",
      // });
      const token = createToken(user);
      await models.Settings.createOne({
        user: user.id,
        theme: "DARK",
        emailNotifications: false,
      });
      return { token, user };
    },

    async signin(_, { input }, { models, createToken }) {
      console.log(input);
      const user = await models.User.findOne(input);
      console.log(user);

      if (!user) {
        throw new AuthenticationError("wrong email + password combo");
      }

      const userrr = {
        id: user[0]._id.valueOf(),
        name: user[0].name,
        email: user[0].email,
        password: user[0].password,
      };

      const token = createToken(userrr);
      return { token, userrr };
    },

  },
};
