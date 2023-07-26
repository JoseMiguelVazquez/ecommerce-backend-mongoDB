const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getUserData } = require('../controllers/usersControllers')

const { protect } = require('../middleware/authMiddleware')

//publicas
router.post('/', registerUser)
router.post('/login', loginUser)

// privada
router.get('/getMe', protect, getUserData)


module.exports = router