import styled from 'styled-components'

import { tab, mobile } from '../responsive'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Logo = styled.img`
    height: 60px;
    margin: 10px 0;
`

export const LoginContainer = styled.div`
    height: fit-content;
    width: 27%;
    border: 1px solid #DDDDDD;
    border-radius: 3px;
    padding: 20px;
    ${tab({ width: '70%' })}
    ${mobile({ width: '90%' })}
`

export const Title = styled.h1`
    font-weight: 500;
    font-size: 30px;
`

export const Label = styled.label`
    display: block;
    font-size: 14px;
    font-weight: bold;
    margin: 13px 0 6px 0;
`
export const Input = styled.input`
    width: 100%;
    height: 30px;
    border: 1px solid #A6A6A6;
    border-radius: 3px;
    padding-left: 10px;

    &:focus {
        outline: 2px solid #F4D078;
    }
`

export const Button = styled.button`
    width: 100%;
    height: 30px;
    color: #5A1130;
    cursor: pointer;
    margin: 15px 0;
    background: #F4D078;
    border: 1px solid #A88734;
    border-radius: 3px;
`

export const Agreement = styled.div`
    font-size: 13px;
`

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 27%;
    padding: 20px 0;
    ${tab({ width: '70%' })}
    ${mobile({ width: '90%' })}
`

export const SignUp = styled.div`
    color: #767676;
    font-size: 12px;
    margin-bottom: 11px;
`

export const SignUpButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    cursor: pointer;
    height: 35px;
    border: 1px solid #8D9096;
    color: #5A1130;
    font-size: 15px;
    background: #EBEDEF;
    border-radius: 3px;
`