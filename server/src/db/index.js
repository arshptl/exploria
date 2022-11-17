const User = require('./User');
const createModel = require("./models");

module.exports = {
  models: {
    User: createModel(User, "user"),
  },
};
