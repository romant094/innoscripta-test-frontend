import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {Redirect, Route, Switch} from 'react-router-dom';
import styled from 'styled-components';
import Cookies from 'cookies-js';
import {PrivateRoute} from '../private-route';
import {Content, Nav, Header, Footer} from '../parts';
import {Home, Cart, PageNotFound, Products, Cabinet} from '../pages';
import {AuthModal, InfoModal} from '../modals';
import {PRODUCT_TYPES} from '../constants';

const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  min-height: 100vh;
  min-width: 355px;
`;

export const App = () => {
    const dispatch = useDispatch();
    const cookieCart = Cookies.get('cart');
    const cart = cookieCart && JSON.parse(cookieCart);
    const currency = Cookies.get('currency');

    useEffect(() => {
        cart && dispatch({
            type: 'UPDATE_DATA_FROM_COOKIES',
            payload: {
                cart,
                currency
            }
        });
    });

    return (
        <Wrapper>
            <Header />
            <Nav />
            <Content>
                <Switch>
                    <Route path='/' exact render={() => <Home />} />
                    <Route path='/cart' render={() => <Cart />} />
                    {
                        PRODUCT_TYPES.map(product => (
                            <Route
                                key={product.title}
                                path={`/${product.type}`}
                                exact
                                render={
                                    () => <Products product={product} />
                                }
                            />)
                        )
                    }
                    <PrivateRoute path='/cabinet' component={Cabinet} />
                    <Route path='/page-not-found' render={() => <PageNotFound />} />
                    <Route path='*'>
                        <Redirect to='/page-not-found' />
                    </Route>
                </Switch>
            </Content>
            <AuthModal />
            <InfoModal />
            <Footer />
        </Wrapper>
    );
};
