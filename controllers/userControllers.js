'use strict';
const bcrypt = require('bcrypt');
const base64 = require('base-64');

const { User } = require("../models/index");


const signup = async (req, res) => {
    try {
        const { userName, password ,role} = req.body;
        const data = {
            userName,
            // email,
            password: await bcrypt.hash(password, 10),
            role
        };
        // console.log(data)

        const user = await User.create(data);

        if (user) {
            res.status(201).json(user)
        }
    } catch (e) {
        console.log(e)
    }
}

const login = async (req, res) => {
    const basicHeader = req.headers.authorization.split(' ');
    // console.log(basicHeader)
    const encodedValue = basicHeader.pop();
    // console.log(encodedValue)
    const decodedValue = base64.decode(encodedValue);
    console.log(decodedValue)
    const [userName, password] = decodedValue.split(':');

    const user = await User.findOne({
        where: {
            userName: userName
        }
    });

    if (user) {
        const isSame = await bcrypt.compare(password, user.password);

        if (isSame) {
            return res.status(200).json(user)
        } else {
            return res.status(401).send('You are not authorized');
        }
    } else {
        return res.status(401).send('You are not authorized');
    }
}

const allUser = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
}

module.exports = {
    signup,
    allUser,
    login
}