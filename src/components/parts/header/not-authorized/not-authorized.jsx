import React from 'react';
import styled from 'styled-components';
import {Button} from 'reactstrap';


const AuthButton = styled(Button)`
  border-radius: 100px;
  width: 100px;
  font-size: 14px;
  &:last-child{
    margin-left: 0.5rem;
  }
`;

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
