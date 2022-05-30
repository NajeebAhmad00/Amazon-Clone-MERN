import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import {
    Container,
    Heading,
    OrdersContainer,
    Order,
    Section1,
    Section2,
    ProductInfo,
    ProductName,
    Button,
    Image
} from '../styles/Orders'
import { userRequest } from '../requestMethods'
import { CircularProgress } from '@material-ui/core'
import { Message } from '../styles/Global'

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [status, setStatus] = useState('')
    const [loading, setLoading] = useState(true)
    const [cancelOrder, setCancelOrder] = useState(false)

    const { currentUser } = useSelector(state => state.user)

    useEffect(() => {
        const getOrders = async () => {
            try {
                const { _id: id, accessToken: token } = currentUser
                if (currentUser.isAdmin) {
                    const { data } = await userRequest.get('/orders', { token })
                    setOrders(data)
                    setLoading(false)
                } else {
                    const { data } = await userRequest.get(`/orders/find/${id}`, { token })
                    setOrders(data)
                    setLoading(false)
                }
            } catch (err) {
                console.log(err)
            }
        }
        getOrders()
    }, [currentUser, orders])

    const handleClick = async (id) => {
        const { accessToken } = currentUser
        try {
            await userRequest.delete(`/orders/${id}`, { accessToken })
            setCancelOrder(true)
        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = async (e) => {
        await setStatus(e.target.value)
    }

    const handleStatus = async (id) => {
        userRequest.put(`/orders/${id}`, { status })
    }

    return (
        <>
            <Navbar />
            <Container>
                <Heading>{currentUser.isAdmin ? 'Orders placed by users' : 'Your Orders'}</Heading>

                <OrdersContainer>
                    <Order>
                        {loading ? <CircularProgress className='progress' /> : (
                            <>
                                {orders.length === 0 && <h2 style={{ textAlign: 'center' }}>No orders to show (if logged in as Admin, try reloading the page)</h2>}
                                {cancelOrder && <Message success>Order cancelled successfully</Message>}
                                {orders.map(order => (
                                    <div key={order._id}>
                                        <Section1>
                                            Order Placed: {order.createdAt.substr(0, 10)}
                                        </Section1>
                                        <Section2>
                                            {order.products.map(product => (
                                                <div key={product._id}>
                                                    <Image src={product.cartImg} />
                                                    <ProductInfo>
                                                        <ProductName>
                                                            {product.title}
                                                        </ProductName>
                                                    </ProductInfo>
                                                </div>
                                            ))}
                                        </Section2>
                                        <div style={{ marginLeft: '20px' }}>Status: <span style={{ color: `${order.status === 'Delivered' ? 'green' : 'orange'}` }}>{order.status}</span></div>
                                        {currentUser.isAdmin && (
                                            <>
                                                <select onChange={handleChange}>
                                                    <option>Pending</option>
                                                    <option>Out for delivery</option>
                                                    <option>Delivered</option>
                                                </select>
                                                <Button onClick={() => handleStatus(order._id)}>Set status</Button>
                                            </>
                                        )}
                                        {order.status === 'Delivered' ? (
                                            <Button style={{ margin: '20px', width: '20%' }}>Buy it again</Button>
                                        ) : (
                                            <Button onClick={() => handleClick(order._id)} style={{ marginTop: '20px', margin: '10px', width: '20%' }}>Cancel order</Button>
                                        )}
                                    </div>
                                ))}
                            </>
                        )}
                    </Order>
                </OrdersContainer>
            </Container>
        </>
    )
}

export default Orders