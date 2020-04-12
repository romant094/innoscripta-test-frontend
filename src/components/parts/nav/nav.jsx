import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Container} from 'reactstrap';
import {CartButton} from './cart-button';
import {PRODUCT_TYPES} from '../../constants';
import logoSmall from '../../../assests/images/logo/logo-small.svg';

const NavigationWrapper = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const Navigation = styled.div`
  position:sticky;
  top: 0;
  z-index: 10;
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 20px;
`;

const ListGroup = styled.ul`
  display:flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListGroupItem = styled.li`
  padding-left: 1rem;
  padding-right: 1rem;
  
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
const SmallLogo = styled.img`
  position: absolute;
  pointer-events: none;
  top: -11px;
  left: calc(-20px + ${({hoveredOffset: left}) => left === null ? -55 : left}px);
  z-index: 15;
  transition: left .75s, opacity .5s;
  opacity: ${({hoveredOffset: left}) => left === null ? 0 : 1};
`;

const NavigationInnerWrapper = styled(NavigationWrapper)`
  padding: 0;
  position: relative;
`;

export const Nav = () => {
    const [hoveredOffset, setHoveredOffset] = useState(null);
    const findOffsetLeft = event => setHoveredOffset(event.target.offsetLeft);
    const cart = useSelector(state => state.cart);

    return (
        <Navigation>
            <Container>
                <NavigationWrapper>
                    <NavigationInnerWrapper>
                        <SmallLogo src={logoSmall} alt='Pacman Pizza' hoveredOffset={hoveredOffset} />
                        <ListGroup>
                            {PRODUCT_TYPES.map(({title, type}) => (
                                    <ListGroupItem key={title}>
                                        <ListGroupItemLink
                                            to={`/${type}`}
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
                        <CartButton itemsCount={cart.length} />
                    </Link>
                </NavigationWrapper>
            </Container>
        </Navigation>
    );
};
