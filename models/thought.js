const { Schema, model, Types } = require('mongoose');
const dayjs = require("dayjs");

const reactionSchema = require('./reaction');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1, 
    },
    createdAt: {
        type: Date,
        // set default value to the current timestamp
        default: Date.now,
        //use a getter method to format the timestamp on query
        get: (dateCreated) =>
            dayjs(dateCreated).format(`MM D YYYY [at] h:mm A`),
    },
    username: {
        type: String, 
        required: true, 
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false, 
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
  });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;