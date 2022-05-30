import styled from 'styled-components'

import { tab, mobile } from '../responsive'

export const Body = styled.div`
    position: absolute;
    top: 3.57rem;
    left: 0;
    display: flex;
    width: 100%;
    min-height: 100vh;
    background: #EAEDED;
    ${tab({ flexDirection: 'column' })}
`

export const Container = styled.div`
    width: 70%;
    height: fit-content;
    background: #fff;
    margin: 30px 0 0 20px;
    padding: 70px 0 20px 20px;
    display: flex;
`

export const Image = styled.img`
    height: 160px;
`

export const Wrapper = styled.div`
    padding: 25px 0 0 25px;
`

export const CartTitle = styled.h2``

export const Span = styled.span``

export const Button = styled.button`
    font-size: 16px;
    background: ${props => props.signIn ? '#FFD814' : '#fff'};
    color: #0F1111;
    width: ${props => props.right ? '100%' : 'fit-content'};
    font-weight: 500};
    padding: 6px 8px;
    border: ${props => props.signIn ? 'none' : '1px solid #D5D9D9'};
    border-radius: 8px;
    margin: ${props => props.right ? '70px 0 0 0' : '15px 10px 0 0'};
    cursor: pointer;

    &:focus {
        outline: none;
    }
`

export const CartItems = styled.div`
    width: 70%;
    height: fit-content;
    background: #fff;
    margin: 30px 0 40px 20px;
    padding: 10px;
    ${tab({ width: '90%' })}
`

export const ItemsTitle = styled.h1`
    font-weight: 500;
    font-size: 2rem;
    padding-bottom: 10px;
`

export const ItemOption = styled.div`
    margin: 10px;
`

export const Quantity = styled.select`
    width: 70px;
    padding: 4px;
    background: #F0F2F2;
    cursor: pointer;
    border: 1px solid #D1D5D5;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 #ccc;

    &:focus {
        outline: none;
    }
`

export const QuantityOption = styled.option``

export const DeleteButton = styled.span`
    font-size: 13px;
    color: #217C8D;
    margin: 0 0 0 10px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`

export const CartItem = styled.div`
    border-top: 1px solid #DDDDDD;
    padding: 20px 10px;
    display: flex;
    ${mobile({ flexDirection: 'column' })}
`

export const ItemImage = styled.img`
    ${tab({ height: '200px', width: '200px', marginBottom: '20px', display: 'flex', justifyContent: 'center' })}
`

export const ItemInfo = styled.div`
    width: 70%;
    ${tab({ width: '40%' })}
    ${mobile({ width: '100%' })}
`

export const ItemTitle = styled.h2`
    font-size: 21px;
    font-weight: 400;
`

export const Price = styled.div`
    width: 10%;
    display: ${props => props.total ? 'inline' : 'flex'};
    justify-content: flex-end;
    font-size: 22px;
    font-weight: 600;
    text-align: ${props => props.total ? 'left' : 'center'};
    ${tab({ width: '5%', justifyContent: 'flex-start' })}
    ${mobile({ marginLeft: props => props.total ? '0' : '40px' })}
`

export const Total = styled.div`
    display: ${props => props.right ? 'inline-block' : 'flex'};
    justify-content: flex-end;
    width: ${props => props.right ? '25%' : '100%'};
    height: ${props => props.right ? '200px' : 'fit-content'};
    background: #fff;
    padding: 20px;
    margin: ${props => props.right ? '30px 0 0 20px' : '0'};
    border-top: ${props => props.right ? 'none' : '1px solid #DDDDDD'};
    ${tab({ justifyContent: 'center', width: '80%' })}
    ${mobile({ width: '90%', marginBottom: props => props.right ? '20px' : '0' })}
`