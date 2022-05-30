import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import {
    Container,
    Address,
    Section,
    Image,
    Span,
    Heading,
    NewAddressContainer,
    SecondHead,
    FormGroup,
    Label,
    Select,
    Option,
    Input,
    FormSection,
    FormInnerSec,
    Button,
    PreviousAddress,
    Head,
    PrevAddSec
} from '../styles/Shipping'
import { updateUser } from '../redux/apiCalls'

const Shipping = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [address, setAddress] = useState({})

    const { currentUser } = useSelector(state => state.user)
    const { _id: id, accessToken: token } = currentUser

    const handleChange = async (e) => {
        const { name, value } = e.target
        await setAddress(prev => {
            return { ...prev, [name]: value }
        })
    }

    const handlePrevClick = async (e) => {
        e.preventDefault()

        navigate('/paymentmethod')
    }

    const handleClick = async (e) => {
        e.preventDefault()

        await updateUser(dispatch, id, { address, token })
        navigate('/paymentmethod')
    }

    return (
        <Container>
            <Address>
                <Section>
                    <Image src='https://raw.githubusercontent.com/aaroncodehub/amazon-clone-react-redux/master/src/assets/auth-logo.png' /><Span>.com</Span>
                </Section>

                <Heading>Select a shipping address</Heading>

                {currentUser.address?.length > 0 && (
                    <PreviousAddress>
                        <Head>{currentUser.username}</Head>
                        <PrevAddSec>
                            {currentUser.address[0]?.street}<br />
                            {currentUser.address[0]?.city}-{currentUser.address[0]?.zipCode}<br />
                            <Button prev onClick={handlePrevClick}>Deliver to this address</Button>
                        </PrevAddSec>
                    </PreviousAddress>
                )}

                <NewAddressContainer>
                    <SecondHead>Add a new address</SecondHead>

                    <FormGroup>
                        <Label htmlFor='country'>Country/Region</Label>
                        <Select name='country' onChange={handleChange}>
                            <Option defaultValue>Select</Option>
                            <Option>Australia</Option>
                            <Option>United Kingdom</Option>
                            <Option>India</Option>
                            <Option>United States</Option>
                        </Select>

                        <Label htmlFor='name'>Full name (First and Last name)</Label>
                        <Input type='text' defaultValue={currentUser.username} />

                        <Label htmlFor='number'>Phone number</Label>
                        <Input type='number' name='phone' onChange={handleChange} />

                        <Label htmlFor='address'>Address</Label>
                        <Input address type='text' placeholder='Street address or P.O. Box' name='street' onChange={handleChange} />
                        <Input address2 type='text' placeholder='Apt, suite, unit, building, floor etc.' name='street' onChange={handleChange} />

                        <FormSection>
                            <FormInnerSec>
                                <Label htmlFor='city'>City</Label>
                                <Input type='text' name='city' onChange={handleChange} />
                            </FormInnerSec>

                            <FormInnerSec>
                                <Label htmlFor='state'>State</Label>
                                <Input type='text' name='state' onChange={handleChange} />
                            </FormInnerSec>
                            <FormInnerSec>
                                <Label htmlFor='zip'>Zip Code</Label>
                                <Input type='number' name='zipCode' onChange={handleChange} />
                            </FormInnerSec>
                        </FormSection>
                        <Button onClick={handleClick}>Use this address</Button>
                    </FormGroup>
                </NewAddressContainer>
            </Address>
        </Container>
    )
}

export default Shipping