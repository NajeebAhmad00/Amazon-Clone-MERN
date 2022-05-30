import styled from 'styled-components'

import { tab, mobile } from '../responsive'

export const Container = styled.div`
    width: 100%;
    padding: ${props => props.account ? '20px 0 0 50px' : '0'};
    ${tab({ display: 'flex', justifyContent: 'center' })};
`

export const Address = styled.div`
    width: 50%;
    padding: 30px 0 10px 50px;
    ${tab({ width: '70%', padding: '0' })}
    ${mobile({ width: '90%' })}
`

export const Section = styled.div`
    height: 50px;
    position: relative;
`

export const Image = styled.img`
    height: 50px;
`

export const Span = styled.span`
    position: absolute;
    top: -5px;
    left: 115px;
    font-weight: 600;
    font-size: 30px;
`

export const Heading = styled.h1`
    font-weight: 500;
    font-size: 1.8rem;
    margin: 20px 0;
`

export const NewAddressContainer = styled.div`
    margin: 20px 0 0 0;
`

export const SecondHead = styled.h2`
    font-size: 1.5rem;
`

export const FormGroup = styled.form`
    margin: 20px 0 0 0;
`

export const Label = styled.label`
    display: block;
    font-size: 15px;
    font-weight: bold;
`

export const Select = styled.select`
    width: 100%;
    margin: 10px 0 26px 0;
    display: block;
    padding: 7px;
    border: 1px solid #BABABA;
    border-radius: 3px;
    background: #E9EBEE;

    &:focus {
        outline: none;
    }
`

export const Option = styled.option``

export const Input = styled.input`
    width: 100%;
    margin: ${props => props.address ? '10px 0' : props.address2 ? '10px 0 16px 0' : '10px 0 26px 0'};
    display: block;
    padding: 7px;
    border: 1px solid #BABABA;
    border-radius: 3px;

    &:focus {
        outline: none;
        background: #fff;
        border: 2px solid #F4D078;
    }
`

export const FormSection = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 30px;
`

export const FormInnerSec = styled.div`
    display: block;
`

export const Button = styled.button`
    padding: 7px;
    border-radius: 3px;
    background: #F2C962;
    border: 1px solid #CBA957;
    margin-bottom: 40px;
    cursor: pointer;
    width: fit-content;
    margin-top: ${props => props.prev ? '10px' : '0'};

    &:focus {
        outline: none;
    }
`

export const PreviousAddress = styled.div`
    margin-top: 20px;
`

export const Head = styled.h2`
    font-size: 0.1rem;
`

export const PrevAddSec = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    font-size: 1rem;
`