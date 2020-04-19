import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {PizzaService} from './service';
import {Auth, PizzaServiceProvider, ErrorBoundary, App} from './components';
import {store} from './stores';
import './assests/css/bootstrap.css';

const pizzaService = new PizzaService();

ReactDOM.render(
    <Provider store={store}>
        <PizzaServiceProvider value={pizzaService}>
            <Router>
                <ErrorBoundary>
                    <Auth>
                        <App />
                    </Auth>
                </ErrorBoundary>
            </Router>
        </PizzaServiceProvider>
    </Provider>,
    document.getElementById('root'));
