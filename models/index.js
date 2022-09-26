'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const Posts = require('./post.model')
const Comment = require('./comment.model')
const User = require("./user.model")
const collection = require('../collection/user-comment-routes');

const POSTGRES_URL = process.env.DATABASE_URL 
// || "postgresql://eman:0000@localhost:5432/eman"



const sequelizeOption = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
}

let sequelize = new Sequelize(POSTGRES_URL,sequelizeOption);
const postsModel = Posts(sequelize, DataTypes);
const commentModel = Comment(sequelize, DataTypes);
const userModel = User(sequelize, DataTypes);


postsModel.hasMany(commentModel, { foreignKey: 'postID', sourceKey: 'id' })
commentModel.belongsTo(postsModel, { foreignKey: 'postID', targetKey: 'id' })

userModel.hasMany( postsModel, { foreignKey: 'userID', sourceKey: 'id' } );
postsModel.belongsTo( userModel, { foreignKey: 'userID', targetKey: 'id' } );

userModel.hasMany( commentModel, { foreignKey: 'userID', sourceKey: 'id' } );
commentModel.belongsTo( userModel, { foreignKey: 'userID', targetKey: 'id' } );

const postCollection = new collection(postsModel);
const commentCollection = new collection(commentModel);

// db.users = userModel


module.exports = {
  db: sequelize,
  Posts: postCollection,
  Comment: commentCollection,
  commentModel: commentModel,
  postModel: postsModel,
  User: userModel
}


