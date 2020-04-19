import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  background-color: #373535;
  padding: 25px 0;
  text-align: center;
  display:flex;
  flex-direction: column;
`;

const FooterContent = styled.span`
  color: #fff;
  opacity: .7;
`;


export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <FooterWrapper>
            <FooterContent>Pacman Pizza © {year}</FooterContent>
            <FooterContent>Found a bug? Contact me via <a href='https://t.me/romant094' target='_blank'>telegram</a>.</FooterContent>
        </FooterWrapper>
    );
};
