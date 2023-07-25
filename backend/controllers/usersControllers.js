const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/usersModel')


const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please complete user information')
    }

    const userExists = await User.findOne({email})
    if(userExists) {
        res.status(400)
        throw new Error('Ese usuario ya existe')
    }

    const salt = await bcrypt.genSalt(10)

    res.json({message: 'Usuario creado'})
})

const loginUser = asyncHandler(async (req, res) => {
    res.json({message: 'Usuario logueado'})
})

const getUserData = asyncHandler(async (req, res) => {
    res.json({message: 'User Data'})
})

module.exports = {
    registerUser,
    loginUser,
    getUserData
}