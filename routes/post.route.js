'use strict';

const express = require('express');
const router = express.Router();

const { Posts } = require('../models/index');

// Routes
router.get('/post', getposts);
router.post('/post', createposts);
router.get('/post/:id', getOneposts);
router.delete('/post/:id', deleteposts);
router.put('/post/:id', updateposts);

async function getposts(req, res) {
    let posts = await Posts.findAll();
    res.status(200).json({
        posts
    });
}

async function createposts(req, res) {
    console.log(req.body)
    const newposts = req.body;
    const posts = await Posts.create(newposts);
    res.status(201).json(posts);
}

async function getOneposts(req, res) {
    const id = req.params.id;
    const posts = await Posts.findOne({
        where: { id: id }
    });
    res.status(200).json(posts)
}

async function deleteposts(req, res) {
    const id = req.params.id;
    let deletedposts = await Posts.destroy({
        where: { id: id }
    });
    res.status(204).json({ deletedposts });
}


async function updateposts(req, res) {
    const id = req.params.id;
    const obj = req.body;

    const updatedposts = await Posts.update()

    res.status(200).json(updatedposts);
}

module.exports = router;