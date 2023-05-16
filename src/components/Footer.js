import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #333;
  color: #fff;
  padding: 2rem 0;
  text-align: center;
`;

const Text = styled.p`
  font-size: 1.2rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Text>© 2023 Hina Aslam. All rights reserved.</Text>
    </FooterContainer>
  );
};

export default Footer;
