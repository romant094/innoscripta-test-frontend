import React from 'react';
import {Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Elements} from '../parts';

export const PageNotFound = () => (
    <Container>
        <Elements.TextWrapper>
            <Elements.Text>Sorry, there is noting here...</Elements.Text>
            <Elements.Text>Return to the <Link to='/'>Home page</Link>.</Elements.Text>
        </Elements.TextWrapper>
    </Container>
);
