import styled from 'styled-components'

import { tab, mobile } from '../responsive'

export const SignUpContainer = styled.div`
    height: fit-content;
    width: 27%;
    border: 1px solid #DDDDDD;
    border-radius: 3px;
    padding: 20px;
    ${tab({ width: '70%' })}
    ${mobile({ width: '90%' })}
`

export const Redirect = styled.div`
    font-size: 14px !important;
    margin: 20px 0 10px 0;
    ${mobile({ fontSize: '17px !important' })}
`