import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import {
    Container,
    Address,
    Section,
    Image,
    Span,
    Heading,
    FormGroup,
    Label,
    Button
} from '../styles/Shipping'
import { useSelector } from 'react-redux'
import { addOrder } from '../redux/apiCalls'
import { removeAll } from '../redux/cartRedux'

const PaymentBox = Address

const PaymentMethod = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [paymentMethod, setPaymentMethod] = useState('')

    const { currentUser } = useSelector(state => state.user)
    const { products: cartProducts, total } = useSelector(state => state.cart)
    const { _id: id } = currentUser

    const handleClick = async (e) => {
        e.preventDefault()

        await addOrder(dispatch, {
            userId: id,
            products: cartProducts,
            paymentMethod: paymentMethod,
            amount: total
        })
        dispatch(removeAll())
        navigate('/revieworder')
    }
    return (
        <Container>
            <PaymentBox>
                <Section>
                    <Image src='https://raw.githubusercontent.com/aaroncodehub/amazon-clone-react-redux/master/src/assets/auth-logo.png' /><Span>.com</Span>
                </Section>

                <FormGroup>
                    <FormGroup>
                        <Heading>Select payment method</Heading>
                        <div>
                            <input
                                type='radio'
                                id='stripe'
                                name='paymentMethod'
                                value='stripe'
                                style={{ marginRight: '10px' }}
                                onClick={(e) => setPaymentMethod(e.target.value)}
                            />
                            <Label style={{ display: 'inline' }} for='stripe'>
                                Credit card or Debit Cart via Stripe
                            </Label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                id='cod'
                                name='paymentMethod'
                                value='cod'
                                style={{ marginRight: '10px' }}
                                onClick={(e) => setPaymentMethod(e.target.value)}
                            />
                            <Label style={{ display: 'inline' }} for='cod'>Cash on Delivery</Label>
                        </div>
                        <Button onClick={handleClick} style={{ marginTop: '20px', width: '50%' }}>Continue</Button>
                    </FormGroup>
                </FormGroup>
            </PaymentBox>
        </Container>
    )
}

export default PaymentMethod