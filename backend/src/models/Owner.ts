import { Model } from "sequelize";
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcryptjs');

const Owner = sequelize.define('Owner', {
  user_email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = Owner;
