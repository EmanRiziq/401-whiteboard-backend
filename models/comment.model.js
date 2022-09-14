'use strict';

const comment = (sequelize, DataTypes) => sequelize.define('comment', {
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  postID: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = comment;