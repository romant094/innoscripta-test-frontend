import React from 'react';
import styled from 'styled-components';
import cartIcon from '../../../../assests/images/icons/cart-orange.svg';

const CartImage = styled.img`
  width: 30px;
  height: auto;
  color: #fff;
`;

const Wrapper = styled.span`
  position: relative;
`;

const CountWrapper = styled.span`
  position: absolute;
  top: -10px;
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

export const CartButton = ({itemsCount = 0}) => {
    // const totalOutput = itemsCount < 11 ? itemsCount : '10+';

    return (
        <Wrapper>
            <CartImage src={cartIcon} alt='Cart' />
            {
                !!itemsCount && <CountWrapper>{itemsCount}</CountWrapper>
            }
        </Wrapper>
    );
};
