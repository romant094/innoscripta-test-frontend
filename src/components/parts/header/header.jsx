import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Container, Button} from 'reactstrap';
import logo from '../../../assests/images/logo/logo.svg';
import logoSmall from '../../../assests/images/logo/logo-small.svg';

const Wrapper = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
`;

const Navigation = styled.div`
  position:sticky;
  top: 0;
  z-index: 10;
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
`;

const NavigationWrapper = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`;

const CartButton = styled(Button)`
  border-radius: 8px;
  width: 100px;
`;

const ListGroup = styled.ul`
  display:flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListGroupItem = styled.li`
  padding-left: .5rem;
  padding-right: .5rem;
  
  &:first-child{
    padding-left: 0;
  }
  
  &:last-child{
    padding-right: 0;
  }
`;

const ListGroupItemLink = styled(Link)`
  color: #000;
  transition: color .2s;
  position: relative;
  
  &:hover{
    text-decoration: none;
    color: #FF6900;
  }
`;

const AuthButton = styled(Button)`
  border-radius: 100px;
  width: 100px;
  font-size: 14px;
`;

const SmallLogo = styled.img`
  position: absolute;
  pointer-events: none;
  top: -11px;
  left: calc(-20px + ${({hoveredOffset: left}) => left === null ? -100 : left}px);
  z-index: 15;
  transition: left .5s;
`;

const NavigationInnerWrapper = styled(NavigationWrapper)`
  padding: 0;
  position: relative;
`;

const HeaderWrapper = styled.div`
  margin-bottom: 20px;
`;

const MainLogo = styled.img`
  margin-left: -13px;
`;

export const Header = () => {
    const [hoveredOffset, setHoveredOffset] = useState(null);

    const navLinks = [
        {title: 'Pizza', url: '/pizza'},
        {title: 'Salads', url: '/salads'},
        {title: 'Burgers', url: '/burgers'},
        {title: 'Drinks', url: '/drinks'}
    ];

    const findOffsetLeft = event => setHoveredOffset(event.target.offsetLeft);

    return (
        <HeaderWrapper>
            <Container>
                <Wrapper>
                    <Link to='/'>
                        <MainLogo src={logo} alt='Pacman Pizza' />
                    </Link>
                    <div>
                        <AuthButton outline color='secondary' className='mr-2'>Sign up</AuthButton>
                        <AuthButton outline color='secondary'>Log in</AuthButton>
                    </div>
                </Wrapper>
            </Container>
            <Navigation>
                <Container>
                    <NavigationWrapper>
                        <NavigationInnerWrapper>
                            <SmallLogo src={logoSmall} alt="Pacman Pizza" hoveredOffset={hoveredOffset} />
                            <ListGroup>
                                {navLinks.map(({title, url}, index) => (
                                        <ListGroupItem key={title}>
                                            <ListGroupItemLink
                                                to={url}
                                                onMouseEnter={event => findOffsetLeft(event)}
                                                onMouseLeave={() => setHoveredOffset(null)}
                                            >
                                                {title}
                                            </ListGroupItemLink>
                                        </ListGroupItem>
                                    )
                                )}
                            </ListGroup>
                        </NavigationInnerWrapper>
                        <Link to='/cart'>
                            <CartButton color="primary">
                                <span>Cart</span>
                                <span className='mr-2 ml-2'>|</span>
                                <span>2</span>
                            </CartButton>
                        </Link>
                    </NavigationWrapper>
                </Container>
            </Navigation>
        </HeaderWrapper>
    )
};
