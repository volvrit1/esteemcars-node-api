import BaseModel from "#models/base";
import { DataTypes } from "sequelize";

class Testimonial extends BaseModel {}

Testimonial.initialize({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
  },
  review: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING(500),
    file: true,
  },
});

export default Testimonial;
