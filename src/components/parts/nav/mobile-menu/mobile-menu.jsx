import React, {useState} from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav} from 'reactstrap';
import styled from 'styled-components';
import bars from './open-menu.svg';
import {PRODUCT_TYPES} from '../../../constants';
import {Link} from 'react-router-dom';

const Img = styled.img`
  width: 32px;
  height: 32px;
`;

const Ddn = styled(Dropdown)`
  list-style-type: none;
  
  a.nav-link{
    padding: 0;
  }
  .dropdown-menu{
    z-index: 100;
    top: 0;
    left: -1px;
  } 
`;

const Lnk = styled(Link)`
  color: #000;
`;

export const MobileMenu = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <Nav>
            <Ddn nav isOpen={dropdownOpen} toggle={toggle} className='d-md-none'>
                <DropdownToggle nav>
                    <Img src={bars} alt='Menu' />
                </DropdownToggle>
                <DropdownMenu style={{zIndex: 20}}>
                    {
                        PRODUCT_TYPES.map(({title}) => (
                            <DropdownItem key={title}>
                                <Lnk to={`/${title}`}>
                                    {title}
                                </Lnk>
                            </DropdownItem>
                        ))
                    }
                </DropdownMenu>
            </Ddn>
        </Nav>
    );
};
