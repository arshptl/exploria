const { AuthenticationError } = require("apollo-server");

const jwt = require("jsonwebtoken");
const { models } = require("./db");
const secret = "catpack";

const createToken = ({ id, role }) => jwt.sign({ id, role }, secret, {expiresIn: 3600 * 24 * 60 * 60});

const getUserFromToken = async(token) => {
  try {
    // console.log(token);
    const user = jwt.verify(token, secret);
    console.log("user", user);
    return await models.User?.findById(user?.id);
  } catch (e) {
    // console.log(e);
    return null;
  }
};

const authenticated = (next) => (root, args, context, info) => {
  // throw new Error("nope");
  console.log("authenticated", context);
  if (!context.user) {
    throw new AuthenticationError("must authenticate");
  }

  return next(root, args, context, info);
};

const authorized = (role, next) => (root, args, context, info) => {
  if (context.user.role !== role) {
    throw new AuthenticationError(`you must have ${role} role`);
  }

  return next(root, args, context, info);
};

module.exports = {
  getUserFromToken,
  authenticated,
  authorized,
  createToken,
};
