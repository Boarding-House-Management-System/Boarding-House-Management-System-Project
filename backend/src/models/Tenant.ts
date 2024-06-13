const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcryptjs');

const Tenant = sequelize.define('Tenant', {
  full_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  room_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  last_payment_month: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  NIC: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  guardian_id:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  phone_no:{
    type: DataTypes.STRING,
    allowNull: false
  },
},{timestamps: false});

module.exports = Tenant;
