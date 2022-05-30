import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { LocationOn, SearchTwoTone, ShoppingCart } from '@material-ui/icons'

import { Container, Logo, Brand, NavItem, Wrapper, NavUp, NavDown, SearchContainer, Dropdown, DropdownItem, SearchInput, SearchButton, Count, TabView } from '../styles/Navbar'

const Navbar = () => {
    const { currentUser } = useSelector(state => state.user)
    const { quantity } = useSelector(state => state.cart)

    return (
        <>
            <Container>
                <Logo>
                    <Link style={{ textDecoration: 'none' }} to='/'>
                        <Brand src='https://github-c5c88.firebaseapp.com/static/media/header-logo.7451f65b.png' />
                    </Link>
                </Logo>

                <NavItem>
                    <Wrapper>
                        <NavUp>Deliver to</NavUp>
                        <NavDown>
                            <LocationOn />
                            Los Angeles 90001
                        </NavDown>
                    </Wrapper>
                </NavItem>

                <SearchContainer>
                    <Dropdown>
                        <DropdownItem defaultValue>All</DropdownItem>
                        <DropdownItem>Amazon Devices</DropdownItem>
                        <DropdownItem>Electronics</DropdownItem>
                        <DropdownItem>Computers</DropdownItem>
                        <DropdownItem>Phones</DropdownItem>
                        <DropdownItem>Books</DropdownItem>
                    </Dropdown>

                    <SearchInput placeholder='Search functionality coming soon...' />

                    <SearchButton>
                        <SearchTwoTone />
                    </SearchButton>
                </SearchContainer>

                <NavItem>
                    <Wrapper>
                        <Link style={{ textDecoration: 'none' }} to={currentUser !== null ? `/user/${currentUser._id}` : '/login'}>
                            <NavUp navigationLeft={true}>Hello, {currentUser ? currentUser.username : 'Sign In'}</NavUp>
                            <NavDown>Account and Lists</NavDown>
                        </Link>
                    </Wrapper>
                </NavItem>

                <NavItem>
                    <Wrapper>
                        <Link style={{ textDecoration: 'none' }} to={currentUser !== null ? '/orders' : '/login'}>
                            <NavUp navigationLeft={true}>Returns</NavUp>
                            <NavDown>& Orders</NavDown>
                        </Link>
                    </Wrapper>
                </NavItem>

                <NavItem>
                    <Link style={{ textDecoration: 'none' }} to='/cart'>
                        <NavDown>
                            <ShoppingCart style={{
                                position: 'relative',
                                fontSize: '3rem'
                            }} />
                            <Count>{quantity}</Count>
                        </NavDown>
                    </Link>
                </NavItem>
            </Container>

            <TabView>
                <NavItem mobile>
                    <Wrapper>
                        <Link style={{ textDecoration: 'none' }} to={currentUser !== null ? `/user/${currentUser._id}` : '/login'}>
                            <NavUp navigationLeft>Hello, {currentUser ? currentUser.username : 'Sign In'}</NavUp>
                            <NavDown>Account and Lists</NavDown>
                        </Link>
                    </Wrapper>
                </NavItem>

                <NavItem mobile>
                    <Wrapper>
                        <Link style={{ textDecoration: 'none' }} to={currentUser !== null ? '/orders' : '/login'}>
                            <NavUp navigationLeft>Returns</NavUp>
                            <NavDown>& Orders</NavDown>
                        </Link>
                    </Wrapper>
                </NavItem>
            </TabView>
        </>
    )
}

export default Navbar