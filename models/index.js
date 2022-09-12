'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const Posts = require('./post.model')

const POSTGRES_URL = process.env.DATABASE_URL || "postgresql://eman:0000@localhost:5432/eman"







let sequelize = new Sequelize(POSTGRES_URL);

module.exports = {
  db: sequelize,
  Posts: Posts(sequelize, DataTypes)
}


