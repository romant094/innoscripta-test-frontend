import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Container, Button} from 'reactstrap';
import logo from '../../../assests/images/logo/logo.svg';

const Wrapper = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
`;

const AuthButton = styled(Button)`
  border-radius: 100px;
  width: 100px;
  font-size: 14px;
`;

const MainLogo = styled.img`
  margin-left: -13px;
`;

export const Header = () => {
    return (
        <div>
            <Container>
                <Wrapper>
                    <Link to='/'>
                        <MainLogo src={logo} alt='Pacman Pizza' />
                    </Link>
                    <div>
                        <AuthButton outline color='secondary' className='mr-2'>Sign up</AuthButton>
                        <AuthButton outline color='secondary'>Log in</AuthButton>
                    </div>
                </Wrapper>
            </Container>
        </div>
    )
};
