'use strict';

const express = require('express');
const router = express.Router();

const { Posts, commentModel, postModel } = require('../models/index');
const bearerAuth = require('../middlewares/bearer-auth');

const acl = require("../middlewares/ACL");


// Routes
router.get('/post', bearerAuth, acl("read"), getposts);
router.get('/post/:id', bearerAuth, acl("read"), getOneposts);
router.get('/getPostComment', bearerAuth, acl("read"), getPostComments);
router.get('/getPostComment/:id', bearerAuth, acl("read"), getOnePostWithComments);
router.post('/post', bearerAuth, acl("creat"), createposts);
router.delete('/post/:id', bearerAuth, acl("delete"), deleteposts);
router.put('/post/:id', bearerAuth, acl("update"), updateposts);

async function getposts(req, res) {
    let posts = await postModel.findAll()
    // let posts = await Posts.read();
    res.status(200).json({
        posts
    });
}

async function getOneposts(req, res) {
    const id = req.params.id;
    const posts = await Posts.read(id);
    res.status(200).json(posts)
}

async function getPostComments(req, res) {
    const postComment = await Posts.readWithComments(commentModel);
    res.status(200).json({
        postComment
    });
}

async function getOnePostWithComments(req, res) {
    const id = req.params.id;
    const postComment = await postModel.findOne({ where: { id }, include: [commentModel] });
    res.status(200).json(postComment);
    // const id = req.params.id;
    // const postComment = await Posts.readOneWithComments( id, commentModel );
    // res.status( 200 ).json( postComment );
}



async function createposts(req, res) {
    console.log(req.body)
    const newposts = req.body;
    const posts = await Posts.create(newposts);
    res.status(201).json(posts);
}

// async function createposts(req, res) {
//     const userID = req.params.userID;
//     const content = req.body.content;
//     const title = req.body.title;
//     const img = req.body.img;
//     const newposts = {userID,content,title,img};
//     const posts = await Posts.create(newposts);
//     res.status(201).json(posts);
// }


async function deleteposts(req, res) {
    const id = req.params.id;
    let deletedposts = await Posts.delete(id);
    res.status(204).json({ deletedposts });
}


async function updateposts(req, res) {
    const id = req.params.id;
    const obj = req.body;
    const updatedposts = await Posts.update(id, obj)
    res.status(200).json(updatedposts);
}

module.exports = router;