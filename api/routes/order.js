const router = require('express').Router()
const Order = require('../models/Order')
const { verifyTokenAndAuthorization, verifyToken, verifyTokenAndAdmin } = require('./verifyToken')

// CREATE
router.post('/', async (req, res) => {
    const newOrder = new Order(req.body)

    try {
        const savedOrder = await newOrder.save()
        res.status(201).json(savedOrder)
    } catch (err) {
        res.status(500).json(err)
    }
})

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updatedOrder)
    } catch (err) {
        res.status(500).json(err)
    }
})

// DELETE
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json('Order has been cancelled')
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET USER ORDERS
router.get('/find/:userId', async (req, res) => {
    try {
        const order = await Order.find({ userId: req.params.userId }).sort({ createdAt: -1 })
        res.status(200).json(order)
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET LATEST ORDER
router.get('/latest', async (req, res) => {
    try {
        const order = await Order.find().sort({ createdAt: -1 }).limit(1)
        res.status(200).json(order)
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET ALL ORDERS
router.get('/', verifyTokenAndAdmin, async (req, res) => {
    try {
        const orders = await Order.find({})
        res.status(200).json(orders)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router