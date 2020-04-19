import React from 'react';
import {Container} from 'reactstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Text = styled.div`
    margin-bottom: .3rem;
    font-weight: 300;
`;

const ComponentWrapper = styled.div`
  color: rgb(115,121,140);
  text-align: center;
  font-size: 20px;
`;

export const PageNotFound = () => {
    return (
        <Container>
            <ComponentWrapper>
                <Text>Sorry, there is noting here...</Text>
                <Text>Return to the <Link to='/'>Home page</Link>.</Text>
            </ComponentWrapper>
        </Container>
    );
};
