import styled from 'styled-components'

import { tab, mobile } from '../responsive'

export const Container = styled.div`
    width: 100%;
    padding: 30px 0 0 100px;
    ${tab({ padding: '20px 0' })}
    ${mobile({ overflowX: 'hidden', padding: '0' })}
`

export const Heading = styled.h1`
    font-weight: 500;
    font-size: 2rem;
    ${tab({ display: 'flex', justifyContent: 'center' })}
`

export const OrdersContainer = styled.div`
    width: 80%;
    margin: 20px auto;
    ${mobile({ width: '95%' })}
`

export const Order = styled.div`
    border: 1px solid #D5D9D9;
    border-radius: 10px;
`

export const Section1 = styled.div`
    padding: 20px;
    border-radius: 10px 10px 0 0;
    background: #F0F2F2;
    height: 60px;
`

export const Section2 = styled.div`
    display: flex;
    min-height: 50px;
    height: fit-content;
    border-radius: 0 0 10px 10px;
    padding: 20px 20px 10px 30px;
`

export const ProductInfo = styled.div`
    margin-top: -20px;
    flex-direction: column;
`

export const ProductName = styled.h3`
    color: #007185;
    font-size: 1rem;
    font-weight: 600;
    margin: 20px 10px;
`

export const Button = styled.button`
    cursor: pointer;
    width: fit-content;
    background: #FFD814;
    border: none;
    border-radius: 8px;
    padding: 7px 15px;
    margin-left: 20px;
`

export const Image = styled.img`
    ${mobile({ width: '100px' })}
`