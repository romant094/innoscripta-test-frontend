import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  margin-bottom: 20px;
  flex: 1 0 auto;;
`;

export const Content = props => (
    <ContentWrapper>
        {props.children}
    </ContentWrapper>
);
