import styled from 'styled-components'

import { laptop, tab, mobile } from '../responsive'

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    padding: 20px;
    overflow-x: hidden;
    ${laptop({ gridTemplateColumns: 'repeat(2, 1fr)' })}
    ${tab({ gridTemplateColumns: '1fr' })}
`

export const ImgContainer = styled.div`
    width: 100%;
    ${tab({ display: 'flex', justifyContent: 'center' })}
`

export const Image = styled.img`
    height: 500px;
    ${mobile({ height: '300px', marginBottom: '20px' })}
`

export const ProductInfo = styled.div`
    padding: 0 20px;
`

export const ProductName = styled.h2`
    font-weight: 500;
    padding: 0 0 10px 0;
`

export const Hr = styled.hr`
    color: #ccc;
`

export const Price = styled.h2`
    font-size: 2rem;
    font-weight: 500;
    padding: 0 0 10px 0;
`

export const Tag = styled.span`
    color: #007185;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`

export const ProductDesc = styled.div`
    margin: 20px 0 0 0;
    font-size: 15px;
`

export const Span = styled.div`
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
    width: fit-content;
`

export const Button = styled.button`
    font-size: ${props => props.buy ? '15px' : '14px'};
    background-color: ${props => props.buy && props.now ? '#FFA41C' : props.buy ? '#FFD814' : '#FEFAF6'};
    border: ${props => props.active ? '1px solid #E47911' : '1px solid #E0E0E0'};
    padding: ${props => props.buy ? '8px 0' : '10px'};
    margin: ${props => props.buy ? '0 0 10px 0' : '20px 3px'};
    border-radius: ${props => props.buy ? '30px' : '0'};
    cursor: pointer;
    font-weight: 600;
    width: ${props => props.buy ? '100%' : 'auto'};

    &:focus {
        outline: none;
    }}

    ${tab({ marginLeft: '10px' })}
`

export const ProductType = styled.div`
    width: 50%;
    display: grid;
    padding-bottom: 20px;
    grid-template-columns: repeat(2, 1fr);
`

export const Section = styled.div`
    margin: 0;
`

export const About = styled.div`
    margin: 5px 0;
`

export const SecondHead = styled.h4`
    font-size: 16px;
    margin-bottom: 3px;
`

export const ListGroup = styled.ul`
    margin-left: 20px;
`

export const ListItem = styled.li`
    margin: 2px 0;
    font-size: 1.1rem;
`

export const BuyProduct = styled.div`
    margin: 30px 0 0 0;
    border: 1px solid #CCC;
    height: fit-content;
    border-radius: 8px;
    padding: 10px 18px;
    ${laptop({ marginTop: '-300px' })}
    ${tab({ margin: '20px 0 0 0' })}
    ${mobile({ marginRight: '20px' })}
`

export const Stock = styled.div`
    font-size: 20px;
    margin: 10px 0;
    color: ${props => props.out ? 'red' : '#007600'};
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${tab({ flexDirection: 'row' })}
    ${mobile({ flexDirection: 'column' })}
`

export const Links = styled.div`
    margin: 5px 0;
    font-size: 16px;
    color: #000;
`