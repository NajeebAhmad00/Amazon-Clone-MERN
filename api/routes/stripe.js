const router = require('express').Router()
const stripe = require('stripe')(process.env.STRIPE_KEY)

router.post('/payment', async (req, res) => {
    let error
    let status

    try {
        const { product, token } = req.body;

        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })

        const charge = await stripe.charges.create(
            {
                amount: product.price * 100,
                currency: "usd",
                customer: customer.id,
                receipt_email: token.email
            })
        console.log('Charge:', { charge })
        status = 'success'
    } catch (err) {
        console.error('Error:', error)
        status = 'failure'
    }

    res.json({ error, status })
})

module.exports = router