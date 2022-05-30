import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import StripeCheckout from 'react-stripe-checkout'
import { Button } from '../styles/Login'
import { publicRequest } from '../requestMethods'

const Pay = () => {
    const [order, setOrder] = useState({})

    const navigate = useNavigate()

    const KEY = process.env.REACT_APP_STRIPE_KEY

    useEffect(() => {
        const getOrder = async () => {
            try {
                const res = await publicRequest.get('/orders/latest')
                setOrder(res.data[0])
            } catch (err) {
                console.log(err)
            }
        }
        getOrder()
    }, [order])

    const onToken = async (token) => {
        await publicRequest.put(`/orders/${order._id}`, {
            isPaid: true
        })
        navigate('/success')
    }
    return (
        <div>
            <StripeCheckout
                name='Amazon'
                description={`Your total is ${order.amount}`}
                amount={order.amount * 100}
                stripeKey={KEY}
                token={onToken}
            >
                <Button>Pay Now</Button>
            </StripeCheckout>
        </div>
    )
}

export default Pay