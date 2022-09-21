'use strict';

// const { users } = require("../models");
const {User} = require("../models/index");

module.exports = async (req, res, next) => {
    console.log('From inside the middleware');
    if (!req.headers.authorization) (
        next('You\'re not authorized')
    )

    const token = req.headers.authorization.split(' ').pop();

    try {
        const validUser = User.authenticateToken(token);

        const userInfo = await User.findOne({ where: { userName: validUser.userName } });
        if (userInfo) {
            req.user = userInfo;
            req.token = userInfo.token

            next();
        } else {
            next('You\'re not authorized')
        }
    } catch (e) {
        next(e.message || e)
    }
}