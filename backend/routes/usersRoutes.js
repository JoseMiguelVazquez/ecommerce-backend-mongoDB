const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getUserData } = require('../controllers/usersControllers')

//publicas
router.post('/', registerUser)
router.post('/login', loginUser)

// privada
router.get('/getMe', getUserData)


module.exports = router