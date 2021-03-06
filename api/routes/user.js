const router = require('express').Router()
const CryptoJS = require('crypto-js')

const User = require('../models/User')
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken')

// UPDATE USER
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updatedUser)
    } catch (err) {
        res.status(500).json(err)
    }
})

// DELETE USER
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('User has been successfully deleted')
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET ALL USERS
router.get('/find', verifyTokenAndAdmin, async (req, res) => {
    const query = req.query.new
    try {
        const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find()
        res.status(200).json(users)
    } catch (err) {
        res.status(400).json(err)
    }
})

// GET A USER
router.get('/find/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const { password, ...others } = user._doc

        res.status(200).json(others)
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router