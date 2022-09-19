'use strict';

const {User} = require("../models/index");

const saveUser = async (req, res, next) => {
    try {
        // Search for the username in the Database

        const username = await User.findOne({
            where: {
                userName: req.body.userName
            }
        });

        if (username) {
            return res.status(409).send('Username already taken')
        }

        // Serch for the userName in the database
        const userName = await User.findOne({
            where: {
                userName: req.body.userName
            }
        });

        if (userName) {
            return res.status(409).send('this user already taken')
        }

        next();

    } catch (e) {
        console.log(e)
    }

}

module.exports = {
    saveUser
}