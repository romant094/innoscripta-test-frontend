import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {ErrorBoundary} from './components/error-boundary';
import {PizzaServiceProvider} from './components/context';
import {PizzaService} from './service';
import {App} from './components/app';
import {store} from './stores';
import './assests/css/bootstrap.css';

const pizzaService = new PizzaService();

ReactDOM.render(
    <Provider store={store}>
        <PizzaServiceProvider value={pizzaService}>
            <Router>
                <ErrorBoundary>
                    <App />
                </ErrorBoundary>
            </Router>
        </PizzaServiceProvider>
    </Provider>,
    document.getElementById('root'));
