import React from 'react';
import {Route} from 'react-router-dom'
import {Container} from 'reactstrap';
import {withAuth} from '../hoc';
import {Elements} from '../parts';
import {AUTH_STATUS} from '../constants';
import {Spinner} from '../spinner';

export const PrivateRouteContainer = ({authContext, component: Component, ...rest}) => {
    const {user} = authContext;

    if (authContext.authStatus === AUTH_STATUS.PENDING) {
        return (
            <Spinner />
        )
    }

    return (
        <Route {...rest} render={props => (
            user
                ? <Component {...props} />
                : <NoAuth />
        )} />
    );
};

const NoAuth = () => (
    <Container>
        <Elements.TextWrapper>
            <Elements.Text>
                To see this page you need to sign in
            </Elements.Text>
        </Elements.TextWrapper>
    </Container>
);

export const PrivateRoute = withAuth()(PrivateRouteContainer);
