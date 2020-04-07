import React from 'react';
import {PromoCarousel} from '../promo-carousel';
import promo1 from '../../assests/images/promo1.jpeg';
import promo2 from '../../assests/images/promo2.jpeg';
import promo3 from '../../assests/images/promo3.jpeg';

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

    return (
        <div>
            <PromoCarousel items={promoItems} settings={{interval: 100}} />
        </div>
    );
};
