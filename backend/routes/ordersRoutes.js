const express = require('express')
const router = express.Router()
const { getAllOrders, createOrder, getOrder, updateOrder, deleteOrder } = require('../controllers/ordersControllers')
const { protect } = require('../middleware/authMiddleware')


router.route('/').get(protect, getAllOrders).post(protect, createOrder)

router.route('/:id').get(protect, getOrder).put(protect, updateOrder).delete(protect, deleteOrder)


module.exports = router