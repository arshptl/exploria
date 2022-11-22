// const nano = require("nanoid");
const { default: mongoose } = require("mongoose");

const createModel = (db, table) => ({
  findById(ID) {
    return db.findById(ID);
  },

  findAll() {
    return db.find();
  },

  createOne(input) {
    // console.log("in a create one section", input);
    let user = new db({
      ...input,
    });

    user.save();
    return user;
  },

  async findOne(filter = {}) {
    if (filter) {
      const data = await db.find(filter);
      return data;
    } else {
      return await db.find();
    }
  },

  async updateById(updateData, userID = {}) {
    const data = await db.findByIdAndUpdate(
      userID,
      {
        $push: {
          history: updateData,
        },
      },
      {
        new: true,
      }
    );

    return data;
  },

  async getItineraries(userId) {
    let userID = mongoose.Types.ObjectId(userId);

    const data = await db.aggregate([
      // {
      //   $match: {
      //     _id: userId
      //   }
      // },
      // {
      //   $lookup: {
      //     from: "useritineraries",
      //     localField: "history",
      //     foreignField: "_id",
      //     as: "result",
      //   },
      // },

      // recent solution
      /* [
        {
          $match: {
            _id: userID,
          },
        },
        {
          $unwind: {
            path: "$history",
            includeArrayIndex: "string",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: "useritineraries",
            localField: "history",
            foreignField: "_id",
            as: "itineraries",
          },
        },
      ], */

      [
        {
          $match: {
            _id: userID,
          },
        },
        {
          $unwind: {
            path: "$history",
            includeArrayIndex: "string",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: "useritineraries",
            localField: "history",
            foreignField: "_id",
            as: "result",
          },
        },
        {
          $unwind: {
            path: "$result",
          },
        },
        {
          $group: {
            _id: {
              id: "$_id",
            },
            result: {
              $addToSet: "$result",
            },
          },
        },
        {
          $project: {
            result: 1,
          },
        },
      ],
    ]);
    // const useritineraries = data.map((res) => {
    //   return res.result;
    // });  
    console.log("data", data[0].result);
    return data[0].result;
  }

  //   findOne(filter = {}) {
  //   if (!filter) {
  //     db.get(table).head().value();
  //   }

  //   return db.get(table).find(filter).value();
  // },
  // findMany(filter) {
  //   if (!filter) {
  //     return db.get(table).orderBy(["createdAt"], ["desc"]).value();
  //   }

  //   return db
  //     .get(table)
  //     .filter(filter)
  //     .orderBy(["createdAt"], ["desc"])
  //     .value();
  // },

  // remove(filter) {
  //   return db.get(table).remove(filter).write();
  // },
  // createOne(fields) {
  //   const item = { ...fields, createdAt: Date.now(), id: nano() };
  //   db.get(table).push(item).write();

  //   return db.get(table).find({ id: item.id }).value();
  // },
  // createMany(toCreate) {
  //   const manyToCreate = (Array.isArray(toCreate) ? toCreate : [toCreate]).map(
  //     (item) => ({
  //       ...item,
  //       createdAt: Date.now(),
  //       id: nano(),
  //     })
  //   );

  //   return db
  //     .get(table)
  //     .push(...manyToCreate)
  //     .write();
  // },
});

module.exports = createModel;
