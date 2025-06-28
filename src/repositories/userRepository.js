import User from '../models/user.js';

export const createUser = async (username, password) => {
  const user = new User({ username, password });
  return user.save();
};

export const findByUsername = async (username) => User.findOne({ username });
export const findById = async (id) => User.findById(id);
