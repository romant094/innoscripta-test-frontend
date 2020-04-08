import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Redirect, Route, Switch} from 'react-router-dom';
import {useCookies} from 'react-cookie';
import styled from 'styled-components';
import {Content, Nav, Header, Footer} from '../parts';
import {Home, Cart, PageNotFound, Products} from '../pages';
import {NAV_LINKS} from '../constants';

const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  min-height: 100vh;
`;

export const App = () => {
    const [cookies, setCookie] = useCookies(['cart']);
    const dispatch = useDispatch();

    useEffect(() => {
        cookies.cart && dispatch({
            type: 'UPDATE_CART',
            payload: cookies.cart
        });
    });

    const cart = useSelector(state => state.cart);
    console.log(cart);

    // setCookie('cart', [1,2,3,4]);

    return (
        <Wrapper>
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
        </Wrapper>
    );
};
