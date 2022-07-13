const User = require('../model/user');


async function getAllUsers(req, res, next) {
  // will provide all users
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }

  if (!users) {
    return res.status(404).json({ message: 'No user found' });
  }
  return res.status(200).json({ users });
}

const getById = async (req, res, next) => {
  const id = req.params.id;
  let user;
  try {
    user = await User.findById(id);
  } catch (err) {
    console.log(err);
  }

  if (!user) {
    return res.status(404).json({ message: 'Unable to find user' });
  }
  return res.status(200).json({ user });
};

const addUser = async (req, res, next) => {
  const { username, email, password } = req.body;
  let user;
  try {
    user = new User({
      username,
      email,
      password,
    
    });

    await user.save();
  } catch (err) {
    console.log(err);
  }

  if (!user) {
    return res.status(500).json({ message: 'Unable to add' });
  }
  return res.status(201).json({ user });
};

const updateUser = async (req, res, next) => {
  const id = req.params.id;
  const { username, email, password  } = req.body;
  let user;
  try {
    user = await User.findByIdAndUpdate(id, {
      username,
      email,
      password,
      
    });
    user = await user.save();
  } catch (err) {
    console.log(err);
  }

  if (!user) {
    return res.status(500).json({ message: 'Unable to Update by this ID' });
  }
  return res.status(200).json({ user });
};

const deleteUser = async (req, res, next) => {
  const id = req.params.id;
  let user;
  try {
    user = await User.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!user) {
    return res.status(404).json({ message: 'Unable to Delete by this ID' });
  }
  return res.status(200).json({ message: 'User Succesfully deleted' });
};


 const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res.status(404).json({ message: "Couldnt Find User By This Email" });
  }

  const isPasswordCorrect = existingUser.password;
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Incorrect Password" });
  }
  return res
    .status(200)
    .json({ message: "Login Successfull", user: existingUser });
};

exports.getAllUsers = getAllUsers;
exports.addUser = addUser;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;

exports.login = login;

