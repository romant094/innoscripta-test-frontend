import React, {useState} from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
import styled from 'styled-components';

const Wrapper = styled.div`
  
`;

export const AuthTabs = (props) => {
    const {activeTab, children, handleChangeAuthType, tabLabels} = props;

    const handleClick = type => handleChangeAuthType(type);

    return (
        <div>
            <Nav tabs>
                {
                    tabLabels.map((tab, id) => (
                        <NavItem key={tab.label}>
                            <NavLink
                                className={activeTab === id ? 'active' : ''}
                                onClick={() => handleClick(tab.type)}
                            >
                                {tab.label}
                            </NavLink>
                        </NavItem>
                    ))
                }
            </Nav>
            <Wrapper>
                {children}
            </Wrapper>
        </div>
    );
};
