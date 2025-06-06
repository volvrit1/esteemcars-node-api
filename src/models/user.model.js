import bcrypt from "bcryptjs";
import httpStatus from "http-status";
import BaseModel from "#models/base";
import { DataTypes } from "sequelize";

class User extends BaseModel {}

User.initialize(
  {
    role: {
      type: DataTypes.ENUM("user", "admin"),
      default: "user",
      allowNull: false,
    },
    title: {
      type: DataTypes.ENUM("Mr", "Ms", "Mrs", "Dr"),
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    middleName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    mobileNo: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      //unique: true,
    },
    dob: {
      type: DataTypes.DATE,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      },
    },
  },
);

export default User;
