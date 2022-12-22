const { Schema, model, Types } = require('mongoose');
import { isEmail } from 'validator';

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true, 
    },
    email: {
      type: String,
      required: true,
      unique: true, 
      validate: [isEmail, 'invalid email'],
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    friendCount: {
        type: Number, 
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false, 
  }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });


const User = model('user', userSchema);

module.exports = User;