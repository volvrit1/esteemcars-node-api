import BaseModel from "#models/base";
import { DataTypes } from "sequelize";
import httpStatus from "#utils/httpStatus";
import { session } from "#middlewares/session";

class Banner extends BaseModel {}

Banner.initialize({
  title: {
    type: DataTypes.STRING,
  },
  subtitle: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
    file: true,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

export default Banner;
