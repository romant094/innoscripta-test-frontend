import React from 'react';
import {Container, Button} from 'reactstrap';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {CartItem} from './cart-item';
import {Elements} from '../../parts'
import {Link} from 'react-router-dom';
import {withPizzaService} from '../../hoc';

const Total = styled.div`
  display:flex;
  justify-content:flex-end;
  font-size: 30px;
  margin-bottom: 30px;
  font-weight: 500;
`;

const Wrapper = styled.div`
  max-width: 690px;
  margin: 0 auto 100px;
`;

const InnerWrapper = styled.div`
  margin-bottom: 30px;
`;

const CartButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CartButton = styled(Button)`
  width: 150px;
`;

const CartContainer = ({pizzaService}) => {
    const cart = useSelector(state => state.cart);
    // TODO replace to utils
    const total = cart.reduce((acc, item) => acc + (item.price * item.count), 0);

    const sendCart = () => {
        pizzaService.request('/cart', 'POST', cart)
            .then(res => console.log(res))
    };

    return (
        <Container>
            <Wrapper>
                <Elements.PageHeading>Cart</Elements.PageHeading>
                <InnerWrapper>
                    {
                        cart.map((item, id) => (
                            <CartItem
                                key={item.title}
                                item={item}
                                id={id}
                            />)
                        )
                    }
                </InnerWrapper>
                {
                    !!cart.length && (
                        <React.Fragment>
                            <Total>Total: {total}</Total>
                            <CartButtonsWrapper>
                                <Link to='/pizza'>
                                    <CartButton outline color='secondary'>Back to menu</CartButton>
                                </Link>
                                <CartButton color='primary' onClick={sendCart}>Order</CartButton>
                            </CartButtonsWrapper>
                        </React.Fragment>
                    )
                }
            </Wrapper>
        </Container>
    );
};

export const Cart = withPizzaService()(CartContainer);
