import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Content = props => (
    <ContentWrapper>
        {props.children}
    </ContentWrapper>
);
