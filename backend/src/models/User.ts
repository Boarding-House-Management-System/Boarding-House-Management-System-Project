import { UserStatus } from "../constants";
import sequelize from '../connections/database'
import { DataTypes } from 'sequelize';

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_status: { 
    type: DataTypes.STRING,
    allowNull: true,
  } 
},{timestamps: false});

export default User;
