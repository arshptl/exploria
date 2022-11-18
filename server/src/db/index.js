const User = require('./User');
const Settings = require('./Settings');
const createModel = require("./models");

module.exports = {
  models: {
    User: createModel(User, "user"),
    Settings: createModel(Settings, "settings")
  },
};
