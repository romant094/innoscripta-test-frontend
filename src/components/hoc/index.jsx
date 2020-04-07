import React from 'react';
import {PizzaServiceConsumer} from '../context';

export const withPizzaService = () => (Wrapped) => (props) => (
    <PizzaServiceConsumer>
        {
            (pizzaService) => {
                return (
                    <Wrapped {...props} pizzaService={pizzaService} />
                )
            }
        }
    </PizzaServiceConsumer>
);
