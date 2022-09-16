'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const Posts = require('./post.model')
const Comment = require('./comment.model')
const collection = require('../collection/user-comment-routes');

// const POSTGRES_URL = process.env.DATABASE_URL || "postgresql://eman:0000@localhost:5432/eman"

// const POSTGRES_URL = process.env.DATABASE_URL || "postgresql://eman:0000@localhost:5432/lab5";
const POSTGRES_URL =  "postgresql://eman:0000@localhost:5432/lab5";

// const sequelizeOption = {
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false
//     }
//   }
// }

let sequelize = new Sequelize(POSTGRES_URL);
const postsModel = Posts(sequelize, DataTypes);
const commentModel = Comment(sequelize, DataTypes);

postsModel.hasMany(commentModel, { foreignKey: 'postID', sourceKey: 'id' })
commentModel.belongsTo(postsModel, { foreignKey: 'postID', targetKey: 'id' })

const postCollection = new collection(postsModel);
const commentCollection = new collection(commentModel);

module.exports = {
  db: sequelize,
  Posts: postCollection,
  Comment: commentCollection,
  commentModel: commentModel,
  postModel: postsModel
}


