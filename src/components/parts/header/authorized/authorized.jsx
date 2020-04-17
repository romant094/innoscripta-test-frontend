import React from 'react';
import {AuthButton} from '../auth-button';
import {Link} from 'react-router-dom';

export const Authorized = () => (
    <React.Fragment>
        <Link to='/cabinet'>
            <AuthButton outline color='secondary'>Cabinet</AuthButton>
        </Link>
    </React.Fragment>
);
