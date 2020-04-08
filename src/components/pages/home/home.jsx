import React from 'react';
import styled from 'styled-components';
import {PromoCarousel} from '../../promo-carousel';
import promo1 from '../../../assests/images/promo1.jpeg';
import promo2 from '../../../assests/images/promo2.jpeg';
import promo3 from '../../../assests/images/promo3.jpeg';
import {HomeLinks} from './home-links';

const PromoWrapper = styled.div`
  margin-bottom: 60px;
`;

const HomeLinksWrapper = styled(PromoWrapper)`

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

    return (
        <div>
            <PromoWrapper>
                <PromoCarousel items={promoItems} settings={{interval: 5000}} />
            </PromoWrapper>
            <HomeLinksWrapper>
                <HomeLinks />
            </HomeLinksWrapper>
        </div>
    );
};
