import React from 'react';
import {AuthConsumer} from '../context';

export const withAuth = () => (Wrapped) => (props) => (
    <AuthConsumer>
        {
            (authContext) => {
                return (
                    <Wrapped {...props} authContext={authContext} />
                )
            }
        }
    </AuthConsumer>
);
