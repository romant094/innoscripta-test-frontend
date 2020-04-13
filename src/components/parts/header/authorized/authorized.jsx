import React, { useState } from 'react';
import styled from 'styled-components';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const UserDropdown = styled(DropdownToggle)`
  background-color: transparent;
  color: var(--primary);
  box-shadow: 0 0 0 transparent;
  padding: 0;
  border: none;
  &:hover{
    background-color: transparent;
  }
`;

export const Authorized = ({user, handleSignOut}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <UserDropdown caret>
                {user && user.name}
            </UserDropdown>
            <DropdownMenu>
                <DropdownItem>Profile</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={handleSignOut}>
                    Sign out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};
