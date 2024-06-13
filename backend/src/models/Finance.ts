import { Model } from "sequelize";
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcryptjs');

const Finance = sequelize.define('Finance', {
  user_email: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Finance;
