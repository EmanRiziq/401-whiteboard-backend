'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const Posts = require('./post.model')

// const POSTGRES_URL = process.env.DATABASE_URL || "postgresql://eman:0000@localhost:5432/eman"

const POSTGRES_URL = process.env.HEROKU_POSTGRESQL_MAUVE_URL ||  "postgresql://eman:0000@localhost:5432/eman";

const sequelizeOption = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
}

let sequelize = new Sequelize(POSTGRES_URL, sequelizeOption);

module.exports = {
  db: sequelize,
  Posts: Posts(sequelize, DataTypes)
}


