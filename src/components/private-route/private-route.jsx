import React from 'react';
import {Route} from 'react-router-dom'
import {Container} from 'reactstrap';
import {withAuth} from '../hoc';
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
    <Container> To see this page you need to sign in </Container>
);

export const PrivateRoute = withAuth()(PrivateRouteContainer);
