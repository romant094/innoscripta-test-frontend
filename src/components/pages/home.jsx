import React from 'react';
import styled from 'styled-components';
import {PromoCarousel} from '../promo-carousel';
import promo1 from '../../assests/images/promo1.jpeg';
import promo2 from '../../assests/images/promo2.jpeg';
import promo3 from '../../assests/images/promo3.jpeg';
import {Catalog} from '../catalog';
import pizza from '../../assests/images/menu/chicken-bbq.jpg';

const PromoWrapper = styled.div`
  margin-bottom: 20px;
`;
export const Home = () => {
    const promoItems = [
        {
            src: promo1,
            altText: 'Promo 1'
        },
        {
            src: promo2,
            altText: 'Promo 2'
        },
        {
            src: promo3,
            altText: 'Promo 3'
        }
    ];

    const catalog = [
        {
            title: 'Buffalo Chicken',
            ingredients: 'Grilled chicken, buffalo sauce, mozzarella, cheddar, red onions',
            img: pizza,
            price: 15
        },
        {
            title: 'Chicken BBQ',
            ingredients: 'Grilled chicken, bbq sauce, bacon, mozzarella, fresh basil, red onions',
            img: pizza,
            price: 15
        },
        {
            title: 'Supreme',
            ingredients: 'Pepperoni, fresh basil, mozzarella, italian sausage, bacon, mushrooms, red onions, black olives, green peppers, marinara sauce',
            img: pizza,
            price: 15
        },
    ];

    return (
        <div>
            <PromoWrapper>
                <PromoCarousel items={promoItems} settings={{interval: 5000}} />
            </PromoWrapper>
            <Catalog items={catalog}/>
        </div>
    );
};
