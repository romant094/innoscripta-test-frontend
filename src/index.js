import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {PizzaServiceProvider} from './components/context';
import {PizzaService} from './service';
import {ErrorBoundary} from './components/error-boundary';
import {Auth} from './components/auth/auth';
import {App} from './components/app';
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
