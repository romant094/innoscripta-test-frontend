import React, {useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Container, Button} from 'reactstrap';
import logo from '../../assests/images/logo/logo.svg';
import logoSmall from '../../assests/images/logo/logo-small.svg';

const Wrapper = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding: 0 .5rem 0 0;
`;

const Navigation = styled.div`
  position:sticky;
  top: 0;
  z-index: 10;
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  padding: .5rem .5rem .5rem 13px;
`;

const NavigationWrapper = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 .6rem 0;
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
  margin-right: 8px;
  margin-left: -8px;
`;

const NavigationInnerWrapper = styled(NavigationWrapper)`
  padding: 0;
`;

const HeaderWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Header = ({showSmallLogo = true}) => (
    <HeaderWrapper>
        <Container>
            <Wrapper>
                <Link to='/'>
                    <img src={logo} alt='Pacman Pizza' />
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
                        {
                            showSmallLogo
                                ? <SmallLogo src={logoSmall} alt="Pacman Pizza" />
                                : null
                        }
                        <ListGroup>
                            <ListGroupItem>
                                <ListGroupItemLink to='/pizza'>Pizza</ListGroupItemLink>
                            </ListGroupItem>
                            <ListGroupItem>
                                <ListGroupItemLink to='/salads'>Salads</ListGroupItemLink>
                            </ListGroupItem>
                            <ListGroupItem>
                                <ListGroupItemLink to='/burgers'>Burgers</ListGroupItemLink>
                            </ListGroupItem>
                            <ListGroupItem>
                                <ListGroupItemLink to='/drinks'>Drinks</ListGroupItemLink>
                            </ListGroupItem>
                        </ListGroup>
                    </NavigationInnerWrapper>
                    <CartButton color="primary">
                        <span>Cart</span>
                        <span className='mr-2 ml-2'>|</span>
                        <span>2</span>
                    </CartButton>
                </NavigationWrapper>
            </Container>
        </Navigation>
    </HeaderWrapper>
);
