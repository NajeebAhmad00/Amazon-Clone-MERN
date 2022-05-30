import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'

import { Container, Logo, Title, Label, Input, Button, Agreement } from '../styles/Login'
import { SignUpContainer, Redirect } from '../styles/Register'
import { Message } from '../styles/Global'
import { registerUser } from '../redux/apiCalls'

const Register = () => {
    const [inputs, setInputs] = useState({})
    const [error, setError] = useState(false)

    const dispatch = useDispatch()

    const handleChange = async (e) => {
        const { name, value } = e.target
        await setInputs(prev => {
            return { ...prev, [name]: value }
        })
    }

    const { error: registerErr, isFetching } = useSelector(state => state.user)

    const handleClick = () => {
        if (inputs.password !== inputs.confirmpassword) {
            setError(true)
        } else {
            registerUser(dispatch, inputs)
        }
    }

    return (
        <Container>
            <Logo src='https://raw.githubusercontent.com/aaroncodehub/amazon-clone-react-redux/master/src/assets/auth-logo.png' />

            <SignUpContainer>
                <Title>Create Account</Title>

                {registerErr && <Message>{registerErr.message}</Message>}

                <Label>Your name</Label>
                <Input type='text' name='username' onChange={handleChange} />
                <Label>Email</Label>
                <Input type='email' name='email' onChange={handleChange} />
                <Label>Password</Label>
                <Input type='password' name='password' onChange={handleChange} />
                <Label>Re-enter password</Label>
                <Input type='password' name='confirmpassword' onChange={handleChange} />
                {error && <Message>Password and Confirm password are differed!</Message>}
                <Button onClick={handleClick}>
                    {isFetching ? <CircularProgress /> : 'Sign Up'}
                </Button>

                <Agreement>
                    By creating an account, you agree to Amazon's<br />
                    Conditions of Use and Privacy
                    Notice.
                </Agreement>

                <Redirect>
                    Already hav an account? <Link style={{ textDecoration: 'none', color: '#0066C0' }} to='/login'>Sign-In</Link>
                </Redirect>
            </SignUpContainer>
        </Container>
    )
}

export default Register