import React, {useState} from 'react';
import {compose} from 'redux';
import {useSelector, useDispatch} from 'react-redux';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert} from 'reactstrap';
import styled from 'styled-components';
import {AuthTabs} from './auth-tabs';
import {AuthForm} from './auth-form';
import {AUTH_STATUS, AUTH_TABS, ERROR_MESSAGE} from '../constants';
import {onChangeAuthType} from '../../actions';
import {withAuth, withPizzaService} from '../hoc';

const ErrorMessage = styled(Alert)`
  padding: 0.25rem 0.75rem;
  font-size: 12px;
`;

const AuthModalContainer = ({authContext, pizzaService}) => {
    const dispatch = useDispatch();
    const initialState = {
        name: 'Антон',
        password: '1111',
        confirmPassword: '1111'
    };
    const {authMsg, clearErrorMessage} = authContext;
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

    const handleChangeAuthType = (type) => {
        clearErrorMessage();
        onChangeAuthType(type, dispatch)
    };

    const handleSubmit = () => {
        setModalError('');
        const {name, password, confirmPassword} = authData;

        if (!nameValidation(name)) return false;

        if (authType === 'reg') {
            const passwordValid = passwordValidation(password, confirmPassword);
            if (!passwordValid) return false;
            authContext.register(name, password);
        } else {
            authContext.login(name, password);
        }
        if (!modalError && !authMsg) {
            handleChangeAuthType(null)
        }
    };

    const nameValidation = name => {
        let isValid = true;

        if (name.length === 0) {
            setModalError('User name should not be empty');
            isValid = false;
        }

        return isValid;
    };

    const passwordValidation = (pass1, pass2) => {
        let isValid = true;

        if (authType === 'reg' && pass1.length < 4) {
            setModalError('The password length should be at least 4 symbols');
            isValid = false;
        }

        if (authType === 'reg' && pass1 !== pass2) {
            setModalError('The passwords does not match');
            isValid = false;
        }

        return isValid
    };

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
                        authMsg !== 'ok' && <ErrorMessage color={authMsg === ERROR_MESSAGE.SENDING ? 'light' : 'danger'}>{authMsg}</ErrorMessage>
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

export const AuthModal = compose(withPizzaService(), withAuth())(AuthModalContainer);
