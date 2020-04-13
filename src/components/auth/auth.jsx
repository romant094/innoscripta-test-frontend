import React, {useState, useEffect} from 'react';
import Cookies from 'cookies-js';
import {AuthProvider} from '../context';
import {withPizzaService} from '../hoc';
import {AUTH_STATUS, ERROR_MESSAGE} from '../constants';

export const AuthContainer = ({pizzaService, ...restProps}) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState('');
    const [token, setToken] = useState('');
    const [authStatus, setAuthStatus] = useState(AUTH_STATUS.NOT_ASKED);
    const [authMsg, setAuthMsg] = useState('ok');

    useEffect(() => {
        const token = Cookies.get('token');
        console.log(token)
        console.log(token && token.length);
        if (token && token.length > 0) {
            setToken(token);
            verifyToken();
        } else {
            console.error('logged out')
            logout()
        }
    }, []);

    const verifyToken = () => {
        setAuthStatus(AUTH_STATUS.PENDING);
        setAuthMsg(ERROR_MESSAGE.SENDING);
        pizzaService.request('/token/verification')
            .then(res => {
                handleReceivedResponse(res);
                const {name} = res.result;
                getUserData(name);
            })
    };

    const login = (name, password) => {
        setAuthStatus(AUTH_STATUS.PENDING);
        setAuthMsg(ERROR_MESSAGE.SENDING);
        pizzaService.request('/login', 'POST', {name, password})
            .then(res => handleReceivedResponse(res, () => setSession(res)))
    };

    const register = (name, password) => {
        setAuthStatus(AUTH_STATUS.PENDING);
        setAuthMsg(ERROR_MESSAGE.SENDING);
        pizzaService.request('/users', 'POST', {name, password})
            .then(res => handleReceivedResponse(res))
    };

    const logout = () => {
        let date = new Date();
        date = date.setDate(date.getDate() -1);
        date = new Date(date);
        Cookies.set('token', '', {expires: date});
        setAuthenticated(false);
        setUser(null);
        setToken('');
        setAuthStatus(AUTH_STATUS.NOT_ASKED);
    };

    const getUserData = (user) => {
        // TODO pizzaService.request(`/user/${user}`)
        pizzaService.request(`/user/privet`)
            .then(res => {
                setSession(res)
            })
    };

    const setSession = (authResults) => {
        let newUser;
        if (Array.isArray(authResults.result)){
            newUser = authResults.result[0]
        } else {
            newUser = {...authResults.result.user}
        }

        setAuthenticated(true);
        setUser(newUser);
    };

    const clearErrorMessage = () => setAuthMsg(ERROR_MESSAGE.OK);
    const handleReceivedResponse = (res, callback) => {
        if (res.error) {
            setAuthStatus(AUTH_STATUS.FAILURE);
            setAuthMsg(res.error.errmsg);
        } else {
            setAuthStatus(AUTH_STATUS.SUCCESS);
            setAuthMsg(ERROR_MESSAGE.OK);
            if (callback) callback()
        }
    };

    let authProvider = {
        user,
        token,
        authenticated,
        authStatus,
        authMsg,
        getUserData,
        login,
        verifyToken,
        logout,
        register,
        clearErrorMessage
    };

    return (
        <AuthProvider value={authProvider}>
            {restProps.children}
        </AuthProvider>
    );
};
export const Auth = withPizzaService()(AuthContainer);
