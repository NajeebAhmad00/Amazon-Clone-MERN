import styled from 'styled-components'

import { tab, mobile } from '../responsive'

export const Banner = styled.div`
    height: 500px;
    background: url('https://m.media-amazon.com/images/I/715qY6Y6zCL._SX3000_.jpg') center center/cover;
`

export const ProductShowcase = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
    width: 97%;
    margin: -300px auto 0 auto;
    ${tab({ gridTemplateColumns: 'repeat(2, 1fr)' })}
    ${mobile({ gridTemplateColumns: '1fr' })}
`

export const ShowcaseItem = styled.div`
    padding: 20px;
    background: #fff;
`

export const ShowcaseHead = styled.h2`
    font-size: 21px;
    margin: 0 0 15px 10px;
`

export const ImageBox = styled.div`
    height: 250px;
`

export const ImgContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin: 0 auto;
    padding: 0;
`

export const ShowcaseText = styled.span`
    font-size: 14px;
    color: #288798;
    margin-left: 10px;
    background: #fff;
    padding: 10px;
    cursor: pointer;
`