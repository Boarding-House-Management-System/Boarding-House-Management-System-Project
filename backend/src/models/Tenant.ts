const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Tenant = sequelize.define('Tenant', {
  user_email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
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
  }
});

module.exports = Tenant;
