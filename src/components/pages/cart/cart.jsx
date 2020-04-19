import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {compose} from 'redux';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Button} from 'reactstrap';
import styled from 'styled-components';
import {CartItem} from './cart-item';
import {withAuth, withPizzaService} from '../../hoc';
import {onStatusMessageChange, onClearCart} from '../../../actions';
import {round} from '../../../utils';
import {Elements} from '../../parts'
import {CURRENCY, STATUS_MESSAGE} from '../../constants';

const Total = styled.div`
  display:flex;
  justify-content:flex-end;
  align-items: center;
  font-size: 25px;
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

const TotalWrapper = styled.div`
  display:flex;
  justify-content: space-between;
  align-items:center;
`;

const Currency = styled(Total)``;

const Select = styled.select`
  border: none;
  background-color: transparent;
  border-radius: 0;
  border-bottom: 1px dashed var(--primary);
  &:active,
  &:focus{
    box-shadow: 0 0 0 0 transparent !important;
    outline: none;
  }
`;

const Option = styled.option`
  font-size: 12px;
`;

const CartFooter = styled.div``;
const DeliveryInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
  font-size: 12px;
`;

const CartContainer = ({pizzaService, authContext}) => {
    const {user} = authContext;
    const [currency, setCurrency] = useState('usd');
    const rate = currency === 'usd' ? 1 : 1.09;
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const total = cart.reduce((acc, item) => acc + (item.price * item.count), 0) * rate;

    useEffect(() => {
        if (user) {
            setCurrency(user.currency)
        }
    }, [user]);

    const handleChangeCurrency = event => setCurrency(event.target.value);

    const sendCart = () => {
        if (!user) {
            onStatusMessageChange(STATUS_MESSAGE.ORDER_NO_AUTH, dispatch);
            return false;
        }

        const data = {
            total,
            cart,
            currency,
            userId: user.id,
            email: user.email,
            date: new Date()
        };

        pizzaService.request('/order', 'POST', data)
            .then(({status}) => {
                if (status === 201) {
                    onClearCart(dispatch);
                    onStatusMessageChange(STATUS_MESSAGE.ORDER_CREATED, dispatch);
                } else {
                    onStatusMessageChange(STATUS_MESSAGE.ORDER_NOT_CREATED, dispatch);
                }
            })
    };

    const cartItems = cart.map((item, id) => (
        <CartItem
            key={item.title}
            item={item}
            id={id}
            rate={rate}
        />
    ));

    return (
        <Container>
            <Wrapper>
                <Elements.PageHeading>Cart</Elements.PageHeading>
                <InnerWrapper>
                    {
                        cart.length > 0
                            ? cartItems
                            : (
                                <Elements.TextWrapper>
                                    <Elements.Text>Your cart is currently empty.</Elements.Text>
                                    <Elements.Text>Taste our super <Link to='/pizza'>pizza</Link> before somebody did it before you!</Elements.Text>
                                </Elements.TextWrapper>
                            )
                    }
                </InnerWrapper>
                {
                    cart.length > 0 && (
                        <CartFooter>
                            <div>
                                <TotalWrapper>
                                    <Currency>
                                        <span className='mr-2'>Currency:</span>
                                        <Select onChange={handleChangeCurrency}>
                                            {
                                                CURRENCY.map(({title, description}) => (
                                                    <Option
                                                        selected={currency === description}
                                                        value={description}
                                                        key={description}
                                                    >
                                                        {
                                                            `${title}`
                                                        }
                                                    </Option>
                                                ))
                                            }
                                        </Select>
                                    </Currency>
                                    <Total>
                                        Total: {round(total * 1.1)}
                                    </Total>
                                </TotalWrapper>
                                <DeliveryInfo>
                                    <em>10% added as a delivery cost</em>
                                </DeliveryInfo>
                            </div>
                            <div>
                                <CartButtonsWrapper>
                                    <Link to='/pizza'>
                                        <CartButton outline color='secondary'>Back to menu</CartButton>
                                    </Link>
                                    <CartButton color='primary' onClick={sendCart}>Order</CartButton>
                                </CartButtonsWrapper>
                            </div>
                        </CartFooter>
                    )
                }
            </Wrapper>
        </Container>
    );
};

export const Cart = compose(withPizzaService(), withAuth())(CartContainer);
