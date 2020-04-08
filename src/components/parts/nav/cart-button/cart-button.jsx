import React from 'react';
import styled from 'styled-components';
import cartIcon from '../../../../assests/images/icons/cart-orange.svg';

const CartImage = styled.img`
  width: 24px;
  height: 24px;
  color: #fff;
`;

const Wrapper = styled.span`
  position: relative;
`;

const CountWrapper = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  border-radius: 100px;
  width: 20px;
  height: 20px;
  background-color: var(--primary-darken);
  color: #fff;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 11px;
`;

export const CartButton = ({total = 0}) => {
    // const totalOutput = total < 11 ? total : '10+';

    return (
        <Wrapper>
            <CartImage src={cartIcon} alt='Cart' />
            {
                total > 0 && <CountWrapper>{total}</CountWrapper>
            }
        </Wrapper>
    );
};
