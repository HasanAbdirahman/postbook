const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function signUpCreate(req, res) {
  try {
    const user = await User.create(req.body);
    const token = JWTCreate(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

function JWTCreate(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}

async function login(req, res) {
  try {
    // Find the user by their email address
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    // Check if the password hashes matches
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.json(JWTCreate(user));
  } catch {
    res.status(400).json("Bad Credentials");
  }
}

module.exports = {
  signUpCreate,
  login,
};
