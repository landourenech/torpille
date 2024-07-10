const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { username, password, firstName, class: studentClass, gender, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);
    const user = await db.User.create({
      username,
      password: hashedPassword,
      firstName,
      class: studentClass,
      gender,
      role,
    });
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await db.User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({ message: 'Invalid Password' });
    }
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: 86400, // 24 hours
    });
    res.status(200).send({ user, token });
  } catch (error) {
    res.status(500).send(error);
  }
};
