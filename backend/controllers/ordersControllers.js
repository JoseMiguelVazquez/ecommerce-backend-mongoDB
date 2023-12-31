const asyncHandler = require('express-async-handler')
const Order = require('../models/ordersModel')

const getAllOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({userId: req.user._id})
    res.status(200).json(orders)
})

const createOrder = asyncHandler(async (req, res) => {
    // if(!req.body.date || !req.body.products) {
    //     res.status(400)
    //     throw new Error('Please complete order information')
    // }
    if(!req.body.date) {
        res.status(400)
        throw new Error('Please complete order information')
    }

    const newOrder = await Order.create({
        userId: req.user._id,
        date: req.body.date,
        products: req.body.products
    })
    res.status(201).json(newOrder)
})

const getOrder = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)
    if(!order){
        res.status(400)
        throw new Error("Order doesn't exists")
    }
    if(order.userId.toString() !== req.user._id.toString()) {
        res.status(401)
        throw new Error('Unauthorized Access')
    } else {
        res.status(200).json(order)
    }
})

const updateOrder = asyncHandler(async (req, res) => {
    const orderToUpdate = await Order.findById(req.params.id)
    if(!orderToUpdate){
        res.status(400)
        throw new Error("Order doesn't exists")
    }
    if(orderToUpdate.userId.toString() !== req.user._id.toString()) {
        res.status(401)
        throw new Error('Unauthorized Access')
    } else {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedOrder)
    }
})

const deleteOrder = asyncHandler(async (req, res) => {
    const orderToDelete = await Order.findById(req.params.id)
    if(!orderToDelete){
        res.status(400)
        throw new Error("Order doesn't exists")
    }
    if(orderToDelete.userId.toString() !== req.user._id.toString()) {
        res.status(401)
        throw new Error('Unauthorized Access')
    } else {
        await orderToDelete.deleteOne()
        res.status(200).json({ id: req.params.id})
    }
})


module.exports = {
    getAllOrders,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder
}