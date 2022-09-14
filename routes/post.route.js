'use strict';

const express = require('express');
const router = express.Router();

const { Posts, Comment, commentModel } = require('../models/index');

// Routes
router.get('/post', getposts);
router.get('/post/:id', getOneposts);
router.get('/getPostComment', getPostComments);
router.get( '/getPostComment/:id', getOnePostWithComments );
router.post('/post', createposts);
router.delete('/post/:id', deleteposts);
router.put('/post/:id', updateposts);

async function getposts(req, res) {
    let posts = await Posts.read();
    res.status(200).json({
        posts
    });
}

async function getOneposts(req, res) {
    const id = req.params.id;
    const posts = await Posts.read(id);
    res.status(200).json(posts)
}

  async function getPostComments ( req, res ) {
    const postComment = await Posts.readWithComments( commentModel );
    res.status( 200 ).json( {
        postComment
    } );
}

async function getOnePostWithComments ( req, res ) {
    const id = req.params.id;
    const postComment = await Posts.readOneWithComments( id, commentModel );
    res.status( 200 ).json( postComment );
}



async function createposts(req, res) {
    console.log(req.body)
    const newposts = req.body;
    const posts = await Posts.create(newposts);
    res.status(201).json(posts);
}

async function deleteposts(req, res) {
    console.log(1);
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