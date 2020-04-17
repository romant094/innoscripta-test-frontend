import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {ListGroup, ListGroupItem} from 'reactstrap';
import {withPizzaService} from '../../../hoc';
import {Spinner} from '../../../spinner';
import {CURRENCY} from '../../../constants';
import {round} from '../../../../utils';

const OrderInfo = styled(ListGroupItem)`
  padding: 0.5rem 0.75rem;
  font-size: 14px;
`;

const Wrapper = styled(ListGroup)`
  margin-bottom: 20px;
`;

const OrderInfoPart = styled.div`
  margin-bottom: 5px;
  
  &:last-child{
    margin-bottom: 0;
  }
`;
const OrderInfoPartFlex = styled(OrderInfoPart)`
  display:flex;
  justify-content: space-between;
`;

const OrdersContainer = ({pizzaService, user}) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        pizzaService.request(`/orders/${user.id}`)
            .then(res => setOrders(res.result))
    }, []);

    if (!orders) return <Spinner />;

    const formatDate = d => {
        const addZero = x => x < 10 ? '0' + x : x;

        const date = new Date(d);
        const day = date.getDay();
        const month = date.getMonth();
        const year = date.getFullYear();

        return `${addZero(day)}/${addZero(month + 1)}/${year}`
    };

    const orderList = orders.map(order => {
        const {products, total, date, currency} = order;
        const index = CURRENCY.findIndex(item => item.description === currency);

        return (
            <OrderInfo key={date}>
                <OrderInfoPart>
                        <strong>Date:</strong> {formatDate(date)}
                </OrderInfoPart>
                <OrderInfoPart>
                    <strong>Details:</strong> {products}
                </OrderInfoPart>
                <OrderInfoPart>
                    <strong>Cost:</strong> {`${round(total)}${CURRENCY[index].title}`}
                </OrderInfoPart>
            </OrderInfo>
        )
    });

    return (
        <React.Fragment>
            <h3>Orders</h3>
            <Wrapper>
                {
                    orders.length > 0
                        ? orderList
                        : <div>No orders found</div>
                }
            </Wrapper>
        </React.Fragment>
    );
};

export const Orders = withPizzaService()(OrdersContainer);
