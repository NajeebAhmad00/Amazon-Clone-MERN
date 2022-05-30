import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { publicRequest } from '../requestMethods'

const Success = () => {
    const [order, setOrder] = useState({})

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

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h1>Your order has been placed</h1>
            {order.isPaid && <h3>Payment Successfull</h3>}
            <Link to='/'>Go to homepage</Link>
        </div>
    )
}

export default Success