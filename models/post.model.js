'use strict';

const Posts = (sequelize, DataTypes) => sequelize.define('Posts', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING
    },
    img: {
        type: DataTypes.STRING,
        defaultValue: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ig2oiZskQ831gT0f-xLQfG2UJR3_2RBL2g&usqp=CAU"
    }
    // ,postType: {
    //     type: DataTypes.STRING

    // }
})

module.exports = Posts;


