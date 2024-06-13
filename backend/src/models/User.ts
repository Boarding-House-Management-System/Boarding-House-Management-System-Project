import { UserStatus } from "../constants";
import sequelize from '../connections/database'
import { DataTypes, Model } from 'sequelize';

export interface IUser extends Model{
  email: string;
  name: string;
  role: string;
  user_status: UserStatus;
}

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  name:{
    type: DataTypes.STRING,
    allowNull: true,
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
