'use strict';

const express = require('express');
const router = express.Router();

const {Comment } = require('../models/index');


// Routes
router.get('/comment', getAllComment);
router.get('/comment/:id', getOneComment);
router.post('/comment', createComment);
router.put('/comment/:id', updateComment);
router.delete('/comment/:id', deleteComment);

async function getAllComment(req, res) {
  const comments = await Comment.read();
  res.status(200).json(comments);
}

async function getOneComment(req, res) {
    const id = req.params.id;
    const comments = await Comment.read(id);
    res.status(200).json(comments)
}

async function createComment(req, res) {
  const newComment = req.body;
  const comments = await Comment.create(newComment);
  res.status(201).json(comments);
}

async function updateComment(req, res) {
  const id = req.params.id;
  const obj = req.body;
  const updatedComment = await Comment.update(id,obj);
  res.status(202).json(updatedComment);
}

async function deleteComment(req, res) {
  const id = req.params.id;
  const deletedItem = await Comment.delete(id);
  res.status(204).json({
    message: `Pet has been deleted for owner id: ${id}`
  })
}

module.exports = router;