import { Model } from "sequelize";
const { DataTypes } = require('sequelize');
import sequelize from '../connections/database'
const bcrypt = require('bcryptjs');

export interface ITenant extends Model{
  full_name: string;
  user_email: string;
  password: string;
  room_id: number;
  last_payment_month: number;
  NIC: string;
  address: string;
  guardian_id: number;
  phone_no: string;
}

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

export default Tenant;
