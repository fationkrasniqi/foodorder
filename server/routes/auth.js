const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

//REGISTER
router.post('/register', async (req, res) => {
  const newUser = new User({
    full_name: req.body.full_name,
    username: req.body.username,
    email: req.body.email,
    img: req.body.img,
    phone: req.body.phone,
    address: req.body.address,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post('/login', async (req, res) => {
  try {

   
    const user = await User.findOne({ username: req.body.username });

    if(!user){

      !user && res.status(401).json('Invalid username or password!');
      return;
    }
    
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );

    const userName = user;
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    // OriginalPassword !== req.body.password &&
    //   res.status(401).json('Invalid email or password!');
   
    if (req.body.password !== OriginalPassword) {
      res.status(401).json('Wrong credentials!');
      return;
    }
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: '3d' }
    );

    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
