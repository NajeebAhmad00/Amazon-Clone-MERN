import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
    Body,
    Container,
    Image,
    Wrapper,
    CartTitle,
    Span,
    Button,
    CartItems,
    ItemsTitle,
    ItemOption,
    Quantity,
    QuantityOption,
    DeleteButton,
    CartItem,
    ItemImage,
    ItemInfo,
    ItemTitle,
    Price,
    Total
} from '../styles/Cart'
import { removeProduct } from '../redux/cartRedux'

const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const { currentUser } = useSelector(state => state.user)

    const handleDelete = (product) => {
        dispatch(removeProduct(product))
    }
    return (
        <>
            <Navbar />

            {cart.quantity === 0 ? (
                <>
                    <Container>
                        <Image src='https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg' />

                        <Wrapper>
                            <CartTitle>Your Amazon Cart is empty</CartTitle>

                            {currentUser === null && (
                                <Span>
                                    <Link to='/login' className='link'>
                                        <Button signIn>
                                            Sign in to your account
                                        </Button>
                                    </Link>
                                    <Link to='/register' className='link'>
                                        <Button>
                                            Sign up now
                                        </Button>
                                    </Link>
                                </Span>
                            )}
                        </Wrapper>
                    </Container>
                </>
            ) : (
                <Body>
                    <CartItems>
                        <ItemsTitle>Shopping Cart</ItemsTitle>
                        {cart.products.map((product, i) => (
                            <CartItem key={i}>
                                <ItemImage src={product.cartImg} />

                                <ItemInfo>
                                    <ItemTitle>
                                        {product.title.length > 100 ? product.title.slice(0, 100) + '...' : product.title}
                                    </ItemTitle>

                                    <ItemOption>
                                        <Quantity>
                                            <QuantityOption defaultValue>1</QuantityOption>
                                            <QuantityOption>2</QuantityOption>
                                        </Quantity>

                                        <DeleteButton onClick={() => handleDelete(product)}>Delete</DeleteButton>
                                    </ItemOption>
                                </ItemInfo>

                                <Price>
                                    ${product.price}
                                </Price>
                            </CartItem>
                        ))}
                        <Total>
                            Subtotal ({cart.quantity} items): <Price total>${cart.total}</Price>
                        </Total>
                    </CartItems>

                    <Total right>
                        Subtotal ({cart.quantity} items): <Price total>${cart.total}</Price>
                        <Link to='/shipping'>
                            <Button right signIn>Proceed to Checkout</Button>
                        </Link>
                    </Total>
                </Body>
            )
            }

            <Footer />
        </>
    )
}

export default Cart