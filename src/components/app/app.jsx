import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import styled from 'styled-components';
import {PizzaServiceProvider} from '../context'
import {pizzaService} from '../../service';
import {ErrorBoundary} from '../error-boundary';
import {Content, Header, Footer} from '../parts';
import {Home, Cart, Product, PageNotFound} from '../pages';
import {store} from '../../store';
import {Nav} from '../nav';

const AppWrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  min-height: 100vh;
`;

export const App = () => {
    return (
        <Provider store={store}>
            <ErrorBoundary>
                <PizzaServiceProvider value={pizzaService}>
                    <Router>
                        <AppWrapper>
                            <Header />
                            <Nav />
                            <Content>
                                <Switch>
                                    <Route path='/' exact render={() => <Home />} />
                                    <Route path='/cart' render={() => <Cart />} />
                                    <Route path='/pizza' render={() => <Product />} />
                                    <Route path='/page-not-found' render={() => <PageNotFound />} />
                                    <Route path='*'>
                                        <Redirect to='/page-not-found' />
                                    </Route>
                                </Switch>
                            </Content>
                            <Footer />
                        </AppWrapper>
                    </Router>
                </PizzaServiceProvider>
            </ErrorBoundary>
        </Provider>
    );
};
