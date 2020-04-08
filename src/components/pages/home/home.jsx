import React from 'react';
import styled from 'styled-components';
import {PromoCarousel} from '../../promo-carousel';
import {HomeLinks} from './home-links';
import {PROMO_ITEMS} from '../../constants';

const Wrapper = styled.div`
  margin-bottom: 60px;
`;

export const Home = () => (
    <React.Fragment>
        <Wrapper>
            <PromoCarousel items={PROMO_ITEMS} settings={{interval: 5000}} />
        </Wrapper>
        <Wrapper>
            <HomeLinks />
        </Wrapper>
    </React.Fragment>
);
