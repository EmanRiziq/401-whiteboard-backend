'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

const postsRouter = require('./routes/post.route');
const commentsRouter = require('./routes/comment.route');

const errorHandler404 = require('./error-handlers/404');
const errorHandler500 = require('./error-handlers/500');

app.use(cors());
app.use(express.json());
app.use(postsRouter);
app.use(commentsRouter)

app.get('/', (req, res) => {
    console.log("home")
    res.status(200).json({
        message: 'Home page',
        code: 200
    })
})

app.use(errorHandler404);
app.use(errorHandler500);

function start(port) {
    app.listen(port, () => console.log(`Up and running on port ${port}`));
}

module.exports = {
    start, app
};