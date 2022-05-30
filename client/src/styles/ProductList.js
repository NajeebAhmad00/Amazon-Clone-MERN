import styled from 'styled-components'

import { tab, mobile } from '../responsive'

export const Container = styled.div`
    display: flex;
`

export const FilterContainer = styled.div`
    width: 20%;
    padding: 20px 10px 10px 15px;
    ${tab({ display: 'none' })}
`

export const FilterHead = styled.h3`
    font-size: 16px;
`
export const Filters = styled.div``

export const Filter = styled.input`
    &:focus {
        outline: none;
    }
`

export const Label = styled.label`
    font-size: 15px;
`

export const ProductContainer = styled.div`
    width: 80%;
    min-height: 90vh;
    height: fit-content;
`

export const Head = styled.h3`
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 600;
    padding: 10px 0 10px 10px;
`

export const ProductListContainer = styled.div`
    width: 100%;
    padding: 0 0 0 30px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    ${tab({ gridTemplateColumns: 'repeat(2, 1fr)', overflow: 'hidden' })}
    ${mobile({ gridTemplateColumns: '1fr', marginLeft: '50px' })}
`

export const ProductListInner = styled.div`
    width: 200px
`

export const ProductImg = styled.img`
    height: 200px;
    display: block;
`

export const ProductInfo = styled.div`
    padding: 10px
`

export const ProductName = styled.h2`
    font-size: 17px;
    font-weight: 400;
    color: #000;
    text-decoration: none;
`

export const Price = styled.h3`
    font-size: 28px;
    font-weight: 500;
`