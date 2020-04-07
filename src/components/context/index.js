import {createContext} from 'react';

const {
    Provider: PizzaServiceProvider,
    Consumer: PizzaServiceConsumer
} = createContext();

export {
    PizzaServiceProvider,
    PizzaServiceConsumer
}
