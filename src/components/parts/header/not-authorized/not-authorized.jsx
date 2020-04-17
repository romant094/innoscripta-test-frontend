import React from 'react';
import {AuthButton} from '../auth-button';

export const NotAuthorized = ({handleSignUp, handleSignIn}) => {
    return (
        <React.Fragment>
            <AuthButton
                outline
                color='secondary'
                onClick={() => handleSignUp('reg')}
            >
                Sign up
            </AuthButton>
            <AuthButton
                outline
                color='secondary'
                onClick={() => handleSignIn('auth')}
            >
                Sign in
            </AuthButton>
        </React.Fragment>
    );
};
