import React from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Container} from 'reactstrap';
import {withAuth} from '../../hoc';
import {onChangeAuthType} from '../../../actions';
import logo from '../../../assests/images/logo/logo.svg';
import {NotAuthorized} from './not-authorized';
import {Authorized} from './authorized';

const Wrapper = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
`;

const MainLogo = styled.img`
  margin-left: -13px;
`;

const HeaderContainer = ({authContext}) => {
    const {user} = authContext;
    const dispatch = useDispatch();
    const handleSignUp = (type) => onChangeAuthType(type, dispatch);
    const handleSignIn = (type) => onChangeAuthType(type, dispatch);

    return (
        <div>
            <Container>
                <Wrapper>
                    <Link to='/'>
                        <MainLogo src={logo} alt='Pacman Pizza' />
                    </Link>
                    <div>
                        {
                            user
                                ? <Authorized />
                                : <NotAuthorized
                                    handleSignUp={handleSignUp}
                                    handleSignIn={handleSignIn}
                                />
                        }
                    </div>
                </Wrapper>
            </Container>
        </div>
    )
};

export const Header = withAuth()(HeaderContainer);
