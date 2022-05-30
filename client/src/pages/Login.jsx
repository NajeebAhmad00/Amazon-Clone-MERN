import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress } from '@material-ui/core'

import {
    Container,
    Logo,
    LoginContainer,
    Title,
    Label,
    Input,
    Button,
    Agreement,
    SignUpContainer,
    SignUp,
    SignUpButton
} from '../styles/Login'
import { Message } from '../styles/Global'
import { login } from '../redux/apiCalls'

const Login = () => {
    const [email, setEmail] = useState('demo@gmail.com')
    const [password, setPassword] = useState('123456')

    const { isFetching, error } = useSelector(state => state.user)

    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()

        login(dispatch, { email, password })
    }
    return (
        <Container>
            <Logo src='https://raw.githubusercontent.com/aaroncodehub/amazon-clone-react-redux/master/src/assets/auth-logo.png' />

            <LoginContainer>
                <Title>Sign-In</Title>

                <Label htmlFor='email'>Email</Label>
                <Input type='email' defaultValue={email} onChange={e => setEmail(e.target.value)} />
                <Label htmlFor='password'>Password</Label>
                <Input type='password' defaultValue={password} onChange={e => setPassword(e.target.value)} />

                {error && <Message>Username or password is incorrect</Message>}

                <Button onClick={handleClick} disabled={isFetching}>
                    {isFetching ? <CircularProgress /> : 'Login'}
                </Button>

                <Agreement>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </Agreement>
            </LoginContainer>

            <SignUpContainer>
                <SignUp>New to Amazon?</SignUp>

                <SignUpButton>
                    <Link to='/register' className='link'>
                        Create your Amazon account
                    </Link>
                </SignUpButton>
            </SignUpContainer>
        </Container>
    )
}

export default Login