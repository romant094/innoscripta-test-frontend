import {createContext} from 'react';

const {
    Provider: PizzaServiceProvider,
    Consumer: PizzaServiceConsumer
} = createContext();

const authContext = createContext({
    authenticated: false,
    user: null,
    token: '',
    login: () => {},
    logout: () => {},
    register: () => {},
    getUserData: () => {}
});

export const AuthProvider = authContext.Provider;
export const AuthConsumer = authContext.Consumer;


export {
    PizzaServiceProvider,
    PizzaServiceConsumer
}
