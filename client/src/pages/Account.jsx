import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress } from '@material-ui/core'

import Navbar from '../components/Navbar'
import { Message } from '../styles/Global'
import { Container, Heading, Address, FormGroup, Label, Input, Button } from '../styles/Shipping'
import { logoutUser, updateUser } from '../redux/apiCalls'

const Section = Address

const Account = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { currentUser, success, isFetching } = useSelector(state => state.user)
    const { username, email, accessToken } = currentUser
    const [info, setInfo] = useState(username, email)

    const handleChange = (e) => {
        const { name, value } = e.target
        setInfo(prev => {
            return { ...prev, [name]: value }
        })
    }

    const handleClick = async (e) => {
        e.preventDefault()

        await logoutUser(dispatch)
        navigate('/')
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        const { _id: id } = currentUser
        const { username, email } = info
        const token = accessToken
        updateUser(dispatch, id, {
            username, email, token
        })
    }
    return (
        <>
            <Navbar />
            <Container style={{ flexDirection: 'column', padding: '20px' }}>
                <Heading>Your Account</Heading>

                <Section style={{ padding: '0' }}>
                    {success && <Message success>Successfully updated</Message>}
                    <FormGroup>
                        <Label htmlFor='name'>Name</Label>
                        <Input
                            type='text'
                            defaultValue={username}
                            name='username'
                            onChange={handleChange}
                        />

                        <Label htmlFor='email'>Email</Label>
                        <Input
                            type='text'
                            name='email'
                            defaultValue={email}
                            onChange={handleChange}
                        />

                        <Label htmlFor='password'>Password</Label>
                        <Input type='password' />

                        <Label htmlFor='confirmpassword'>Confirm Password</Label>
                        <Input type='password' />

                        <Button style={{ marginRight: '20px' }} onClick={handleUpdate}>
                            {isFetching ? <CircularProgress /> : 'Update Profile'}
                        </Button>
                        <Button onClick={handleClick}>Sign Out</Button>
                    </FormGroup>
                </Section>
            </Container>
        </>
    )
}

export default Account