import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {ErrorBoundary} from './components/error-boundary';
import {PizzaServiceProvider} from './components/context';
import {pizzaService} from './service';
import {App} from './components/app';
import {store} from './stores';
import './assests/css/bootstrap.css';

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <PizzaServiceProvider value={pizzaService}>
                <Router>
                    <App />
                </Router>
            </PizzaServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root'));


