import React from 'react';
import {Container} from 'reactstrap';
import styled from 'styled-components';
import {Elements} from '../parts';

const Wrapper = styled.div`
  padding-top: 40px;
`;

export const ErrorIndicator = () => {
    return (
        <Wrapper>
            <Container>
                <Elements.TextWrapper>
                    <Elements.Text>Oops!</Elements.Text>
                    <Elements.Text>We already know about this problem and have already a courier with instruments to fix
                        it...</Elements.Text>
                    <Elements.Text>Visit our <a href='/'>Home page</a></Elements.Text>
                </Elements.TextWrapper>
            </Container>
        </Wrapper>
    );
};
