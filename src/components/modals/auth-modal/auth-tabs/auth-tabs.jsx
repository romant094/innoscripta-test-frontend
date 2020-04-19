import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
import styled from 'styled-components';


const TabsWrapper = styled(Nav)`
  margin-bottom: 20px;
  display:flex;
  justify-content:space-between;
  border-width: 2px;
`;

const TabsItem = styled(NavItem)`
  margin-bottom: -2px !important;
  width: 50%;
  text-align: center;
`;

const TabsLink = styled(NavLink)`
  padding: 0 1rem 0.25rem;
  border: none !important;
  letter-spacing: 1px;
  
  &.active{
    color: var(--primary) !important;
    border-bottom: 2px solid var(--primary) !important;
  }
`;

export const AuthTabs = (props) => {
    const {activeTab, children, handleChangeAuthType, tabLabels} = props;

    const handleClick = type => handleChangeAuthType(type);

    return (
        <React.Fragment>
            <TabsWrapper tabs>
                {
                    tabLabels.map((tab, id) => (
                        <TabsItem key={tab.label}>
                            <TabsLink
                                className={activeTab === id ? 'active' : ''}
                                onClick={() => handleClick(tab.type)}
                            >
                                {tab.label}
                            </TabsLink>
                        </TabsItem>
                    ))
                }
            </TabsWrapper>
            <div>
                {children}
            </div>
        </React.Fragment>
    );
};
