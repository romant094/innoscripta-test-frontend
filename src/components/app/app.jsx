import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import styled from 'styled-components';
import {PizzaServiceProvider} from '../context'
import {pizzaService} from '../../service';
import {ErrorBoundary} from '../error-boundary';
import {Content, Header, Nav, Footer} from '../parts';
import {Home, Cart, Products, PageNotFound} from '../pages';
import {store} from '../../store';
import {NAV_LINKS} from '../constants';

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
                                    {
                                        NAV_LINKS.map(link => (
                                            <Route
                                                key={link.title}
                                                path={link.url}
                                                exact
                                                render={
                                                    () => <Products product={link} />
                                                }
                                            />)
                                        )
                                    }
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
