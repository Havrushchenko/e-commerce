// Import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// Import our database connection from config.js
const sequelize = require('../config/connection.js');

// Initialize Product model (table) by extending off Sequelize's Model class
class Category extends Model { }

// Set up fields and rules for Product model
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
