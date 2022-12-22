const { Schema, Types } = require("mongoose");
const dayjs = require("dayjs");

//SCHEMA ONLY 

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },

    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (dateCreated) =>
        dayjs(dateCreated).format(`MMMM D YYYY [at] h:mm A`),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema; 