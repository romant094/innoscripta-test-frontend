import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Button, Container} from 'reactstrap';
import logoSmall from '../../../assests/images/logo/logo-small.svg';
import {NAV_LINKS} from '../../constants';

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

    return (
        <Navigation>
            <Container>
                <NavigationWrapper>
                    <NavigationInnerWrapper>
                        <SmallLogo src={logoSmall} alt="Pacman Pizza" hoveredOffset={hoveredOffset} />
                        <ListGroup>
                            {NAV_LINKS.map(({title, url}, index) => (
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
    );
};
