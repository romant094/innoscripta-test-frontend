import React, {useState, useEffect, useCallback} from 'react';
import Cookies from 'cookies-js';
import {AuthProvider} from '../context';
import {withPizzaService} from '../hoc';
import {AUTH_STATUS, STATUS_MESSAGE} from '../constants';
import {useDispatch} from 'react-redux';
import {onStatusMessageChange} from '../../actions';

export const AuthContainer = ({pizzaService, ...restProps}) => {
    const [user, setUser] = useState(null);
    const [authStatus, setAuthStatus] = useState(AUTH_STATUS.NOT_ASKED);

    const dispatch = useDispatch();

    const register = (email, password) => {
        setAuthStatus(AUTH_STATUS.PENDING);
        pizzaService.request('/user/registration', 'POST', {email, password})
            .then(res => {
                const {error} = res;

                if (error) {
                    setAuthStatus(AUTH_STATUS.FAILURE);
                    onStatusMessageChange(error.errmsg, dispatch);
                } else {
                    setAuthStatus(AUTH_STATUS.SUCCESS);
                    onStatusMessageChange(STATUS_MESSAGE.USER_CREATED, dispatch);
                }
            })
    };

    const obtainToken = (email, password) => {
        setAuthStatus(AUTH_STATUS.PENDING);
        pizzaService.request('/token/obtaining', 'POST', {email, password})
            .then(res => {
                const {error, result, status} = res;

                if (error || status >= 300) {
                    setAuthStatus(AUTH_STATUS.FAILURE);
                    onStatusMessageChange(STATUS_MESSAGE.WRONG_CREDENTIALS, dispatch);
                } else {
                    setAuthStatus(AUTH_STATUS.SUCCESS);
                    onStatusMessageChange(STATUS_MESSAGE.USER_SIGNED_IN, dispatch);
                    getUserData(result.id)
                }
            })
    };

    const logout = () => {
        let date = new Date();
        date = date.setDate(date.getDate() - 1);
        date = new Date(date);
        Cookies.set('token', '', {expires: date});
        setUser(null);
    };

    const getUserData = useCallback(
        (id) => {
            setAuthStatus(AUTH_STATUS.PENDING);
            pizzaService.request(`/user/${id}`)
                .then(res => {
                    const {error, result} = res;

                    if (error) {
                        setAuthStatus(AUTH_STATUS.FAILURE);
                        onStatusMessageChange(error.errmsg, dispatch);
                    } else {
                        setAuthStatus(AUTH_STATUS.SUCCESS);
                        setUser(result);
                    }
                })
        },
        [pizzaService, dispatch, setUser]
    );


    const verifyToken = useCallback(
        () => {
            pizzaService.request('/token/verification')
                .then(res => {
                    const {error, result} = res;

                    if (error) {
                        setAuthStatus(AUTH_STATUS.FAILURE);
                        onStatusMessageChange(error.errmsg, dispatch);
                    } else {
                        setAuthStatus(AUTH_STATUS.SUCCESS);
                        getUserData(result.id);
                    }
                })
        },
        [pizzaService, dispatch, getUserData]
    );

    useEffect(() => {
        const token = Cookies.get('token');
        if (token && token.length > 0) {
            verifyToken();
        } else {
            logout();
        }
    }, [verifyToken]);

    let authProvider = {
        user,
        authStatus,
        getUserData,
        obtainToken,
        verifyToken,
        logout,
        register
    };

    return (
        <AuthProvider value={authProvider}>
            {restProps.children}
        </AuthProvider>
    );
};
export const Auth = withPizzaService()(AuthContainer);
