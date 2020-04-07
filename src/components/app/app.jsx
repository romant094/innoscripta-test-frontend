import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {ErrorBoundary} from '../error-boundary';
import {PizzaServiceProvider} from '../context'
import {Content} from '../content';
import {pizzaService} from '../../service';
import {Header} from '../header';
import {store} from '../../store';
import {Home, Cart, Product, PageNotFound} from '../pages';

export const App = () => {
    return (
        <Provider store={store}>
            <ErrorBoundary>
                <PizzaServiceProvider value={pizzaService}>
                    <Router>
                        <div>
                            <Header />
                            <Content>
                                <Switch>
                                    <Route path='/' exact render={() => <Home/>} />
                                    <Route path='/cart' render={() => <Cart/>} />
                                    <Route path='/pizza' render={() => <Product/>} />
                                    <Route path='/page-not-found' render={() => <PageNotFound/>} />
                                    <Route path='*'>
                                        <Redirect to='/page-not-found' />
                                    </Route>
                                </Switch>
                            </Content>
                        </div>
                    </Router>
                </PizzaServiceProvider>
            </ErrorBoundary>
        </Provider>
    );
};
