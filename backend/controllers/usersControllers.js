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
        throw new Error('User already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user){
        res.status(201)
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    }
    else {
        res.status(400)
        throw new Error('Register could not be saved')
    }
})

const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body

    if(!email || !password){
        res.status(400)
        throw new Error('Please provide both email and password')
    }

    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }else{
        res.status(401)
        throw new Error('Incorrect email or password')
    }
})

const getUserData = asyncHandler(async (req, res) => {
    res.json(req.user)
})

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '60m'
    })
}

module.exports = {
    registerUser,
    loginUser,
    getUserData
}