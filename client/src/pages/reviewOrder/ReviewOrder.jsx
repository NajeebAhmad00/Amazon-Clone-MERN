import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import './reviewOrder.css'
import { Link } from 'react-router-dom'
import { publicRequest } from '../../requestMethods'
import { Agreement, Button } from '../../styles/Login'
import { CartItem, ItemImage, ItemInfo, ItemTitle } from '../../styles/Cart'

const ReviewOrder = () => {
    const navigate = useNavigate()
    const [order, setOrder] = useState({})
    const deliveryCharge = 2.28

    const { currentUser } = useSelector(state => state.user)

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

    const handleClick = (e) => {
        e.preventDefault()
        if (order.paymentMethod === 'cod') {
            navigate('/success')
        } else {
            navigate('/pay')
        }
    }
    return (
        <div className='container'>
            <h1 className='heading'>Review your Order</h1>
            <Agreement>By placing your order, you agree to <Link to='amazon.in'>Amazon's privacy notice</Link> and <Link to='amazon.in'>conditions of use.</Link></Agreement>

            <div className='inner-container'>
                <div className='left'>
                    <span>
                        <h4>Shipping address</h4>
                        {currentUser.username} <br />
                        {currentUser.address[0].street} <br />
                        {currentUser.address[0].state}, {currentUser.address[0].city} <br />
                        {currentUser.address[0].zipCode}<br />
                        Phone: {currentUser.phone} <br /><br /><br />

                        {order?.products?.map((item, i) => (
                            <CartItem style={{ border: 'none', display: 'flex', justifyContent: 'space-between', marginRight: '-60px' }} key={i}>
                                <ItemImage src={item.cartImg} />

                                <ItemInfo style={{ border: 'none' }}>
                                    <ItemTitle>
                                        {item.title.length > 100 ? item.title.slice(0, 100) + '...' : item.title}
                                    </ItemTitle>
                                </ItemInfo>
                            </CartItem>
                        ))}
                    </span>
                    <span>
                        <h4>Payment method</h4>
                        {order.paymentMethod}
                    </span>
                </div>
                <div>
                    <Button onClick={handleClick}>
                        {order.paymentMethod === 'cod' ? 'Place your Order' : 'Place Order and Pay'}
                    </Button>
                    <span style={{ fontWeight: 'bold' }}>Order Summary</span>
                    <span>Items: $ {order.amount}</span>
                    <span>Delivery: $ {deliveryCharge}</span>
                    <span>Total: $ {order.amount + deliveryCharge}</span>
                    {order.amount > 20 && (
                        <span>Promotion applied: -${deliveryCharge}</span>
                    )}
                    <span className='total'>Order Total: $ {order.amount > 20 ? order.amount : order.amount + deliveryCharge}</span>
                </div>
            </div>
        </div>
    )
}

export default ReviewOrder