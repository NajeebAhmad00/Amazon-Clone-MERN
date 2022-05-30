import styled from 'styled-components'

import { laptop, mobile } from '../responsive'

export const Container = styled.nav`
    width: 100%;
    height: 3.57rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 10px;
    background-color: #131921;
    color: #fffff1;
    ${mobile({ overflowX: 'hidden' })}
`

export const Logo = styled.div``

export const Brand = styled.img`
    height: 2.3rem;
    margin-top: 10px;
    cursor: pointer;
`

export const NavItem = styled.div`
    position: relative;
    margin-bottom: -10px;
    cursor: pointer;
    ${laptop({ display: props => props.mobile ? 'inline-block' : 'none' })};

    &:last-child {
        margin-bottom: 0;
        ${laptop({ display: 'inline-block', marginRight: '10px' })}
    }
`

export const Wrapper = styled.div``

export const NavUp = styled.span`
    position: absolute;
    top: -10px;
    left: ${props => props.navigationLeft ? '0' : '25px'};
    font-size: 0.8rem;
    color: ${props => props.navigationLeft ? '#EAE7F8' : '#A8A7AB'};
`

export const NavDown = styled.span`
    font-size: 15px;
    font-weight: 600;
    color: #fff;
`

export const SearchContainer = styled.div`
    height: 2.3rem;
    display: flex;
    justify-content: flex-start;
    margin: 0;
    ${mobile({ margin: '0 0 0 7px' })}
`

export const Dropdown = styled.select`
    width: 100px;
    height: 2.3rem;
    background: #F3F3F3;
    border: 1px solid #CDCDCD;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    overflow: hidden;
    ${mobile({ display: 'none' })}

    &:focus {
        outline: none
    }
`

export const DropdownItem = styled.option`
    height: 2.3rem;
`

export const SearchInput = styled.input`
    width: 37vw;
    height: 2.3rem;
    font-size: 1rem;
    font-weight: 500;
    color: #303331;
    padding-left: 10px;
    border: none;

    ${mobile({ width: '150px', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' })}

    &:focus {
        outline: none
    }
`

export const SearchButton = styled.button`
    background: #FEBD69;
    width: 40px;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
    ${mobile({ width: '40px' })}

    &:focus {
        outline: none
    }
`
export const Count = styled.div`
    position: absolute;
    top: 9%;
    left: 20px;
    color: black;
    font-size: 1.3rem;
`

export const TabView = styled.div`
    height: fit-content;
    justify-content: space-between;
    padding: 10px 15px;
    background: #131921;
    display: none;
    ${laptop({ display: 'flex' })}
`