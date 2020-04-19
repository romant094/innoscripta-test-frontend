import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert} from 'reactstrap';
import styled from 'styled-components';
import {AuthTabs} from './auth-tabs';
import {AuthForm} from './auth-form';
import {onChangeAuthType} from '../../../actions';
import {withAuth} from '../../hoc';
import {AUTH_STATUS, AUTH_TABS, STATUS_MESSAGE} from '../../constants';

const ErrorMessage = styled(Alert)`
  padding: 0.25rem 0.75rem;
  font-size: 12px;
`;

const AuthModalContainer = ({authContext}) => {
    const dispatch = useDispatch();
    const initialState = {
        email: '',
        password: '',
        confirmPassword: ''
    };
    const {authMsg} = authContext;
    const [authData, setAuthData] = useState(initialState);
    const [modalError, setModalError] = useState('');

    const handleChangeField = (event) => {
        const {name, value} = event.target;
        setAuthData({
            ...authData,
            [name]: value
        })
    };

    const authType = useSelector(state => state.authType);

    const activeTab = AUTH_TABS.findIndex(item => item.type === authType);

    const toggleModal = () => handleChangeAuthType(null, dispatch);

    const handleChangeAuthType = (type) => onChangeAuthType(type, dispatch);

    const emailValidation = email => {
        let isValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

        if (!isValid) {
            setModalError('Email is not correct.');
        }

        return isValid;
    };

    const passwordValidation = (pass1, pass2) => {
        let isValid = true;

        if (pass1.length === 0) {
            setModalError(STATUS_MESSAGE.PASSWORD_EMPTY);
            isValid = false;
        }

        if (authType === 'reg' && pass1.length < 4) {
            setModalError(STATUS_MESSAGE.PASSWORD_SHORT);
            isValid = false;
        }

        if (authType === 'reg' && pass1 !== pass2) {
            setModalError(STATUS_MESSAGE.PASSWORDS_NOT_MATCH);
            isValid = false;
        }

        return isValid
    };

    const handleSubmit = () => {
        const {email, password, confirmPassword} = authData;

        if (!emailValidation(email)) return false;

        const passwordValid = passwordValidation(password, confirmPassword);
        if (!passwordValid) return false;

        setModalError(null);

        if (authType === 'reg') {
            authContext.register(email, password);
        } else {
            authContext.obtainToken(email, password);
        }

        handleChangeAuthType(null);
    };

    const showErrorMessage = authMsg === AUTH_STATUS.FAILURE || authMsg === AUTH_STATUS.PENDING;

    return (
        <div>
            <Modal isOpen={authType !== null} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Authentication</ModalHeader>
                <ModalBody>
                    <AuthTabs
                        authType={authType}
                        activeTab={activeTab}
                        tabLabels={AUTH_TABS}
                        handleChangeAuthType={handleChangeAuthType}
                    >
                        <AuthForm
                            handleChange={handleChangeField}
                            submitPasswordVisible={authType === 'reg'}
                        />
                    </AuthTabs>
                    {
                        modalError && <ErrorMessage color='danger'>{modalError}</ErrorMessage>
                    }
                    {
                        showErrorMessage && <ErrorMessage
                            color={authMsg === AUTH_STATUS.PENDING ? 'light' : 'danger'}>{authMsg}</ErrorMessage>
                    }
                </ModalBody>
                <ModalFooter>
                    <Button outline color="secondary" onClick={toggleModal}>Cancel</Button>
                    <Button color="primary" onClick={handleSubmit}>Submit</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export const AuthModal = withAuth()(AuthModalContainer);
