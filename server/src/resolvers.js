const { authenticated, authorized } = require("./auth");
const fetch = require("node-fetch");
const { default: mongoose } = require("mongoose");
const { AuthenticationError } = require("apollo-server");
// const { ApolloError } = require("apollo-server-errors");

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

    itineraries: authenticated(async (_, __, { user, models }) => {
      const itineraries = await models.User.getItineraries(user.id);
      return itineraries;
    }),
  },
  Mutation: {
    async signup(_, { input }, { models, createToken }) {
      console.log(input.name);
      const existing = await models.User.findOne({ email: input.email });
      if (existing.length !== 0) {
        throw new Error("User already exists");
      }

      let user = await models.User.createOne(input);

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

      if (user.length === 0) {
        console.log("wrong email + password combo");
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

    createItinerary: authenticated(async (_, { input }, { user, models }) => {
      console.log(input);

      // API for fetch the place_id
      const responseLocation = await fetch(
        `https://api.geoapify.com/v1/geocode/search?name=${input.place}&format=json&apiKey=5514092ef9364134adef57e5e8fd44b2`
      );
      const dataPID = await responseLocation.json();
      console.log(dataPID.results[0].place_id);
      const pid = dataPID.results[0].place_id;

      // API for fetch the attraction places
      const responseAttraction = await fetch(
        `https://api.geoapify.com/v2/places?categories=tourism.attraction&filter=place:${pid}&limit=20&apiKey=5514092ef9364134adef57e5e8fd44b2`
      );
      const dataAttraction = await responseAttraction.json();

      // simplify the data and store it in a object
      let attractions = dataAttraction.features.map((data) => {
        return {
          id: data.properties.place_id,
          name: data.properties.name ?? "",
          category: data.properties.datasource.raw.tourism,
          location: data.properties.formatted,
        };
      });

      // append attractions into userItineraryObject
      const userItineraryObject = {
        createdAt: Date.now(),
        title: `${user.name}'s Itinerary - ${input.place}`,
        days: input.days,
        cost: "5000",
        place: input.place,
        attractions: attractions,
        flight: "indigo",
      };

      // Upload userItineraryObject into MongoDB
      let userItinerary = await models.UserItinerary.createOne(
        userItineraryObject
      );

      let userItineraryID = mongoose.Types.ObjectId(userItinerary.id);

      // update the Itinerary data into "User" DB
      let updateUser = await models.User.updateById(userItineraryID, user.id);
      console.log(updateUser);

      // return the Itinerary data for client display
      return userItineraryObject;
    }),
  },
};
