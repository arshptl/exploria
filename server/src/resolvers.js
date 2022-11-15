const User = require("./db/User");

module.exports = {
    Query: {
        async me(_, { ID }) {
            // console.log(users);
            const user = await User.findById(ID);
            // console.log(user.name);
            if (user) {
                return user;
            }
            else {
                console.log("user not found");
                return {error: "user not found"};
            }
                // return await users?.findById(ID);
            }
        //     (_, __, { id }) => {
        // return user;
        // },
        
    },
};
