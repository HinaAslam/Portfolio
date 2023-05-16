import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: #f2f2f2;
  padding: 4rem 0;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subheading = styled.p`
  font-size: 1.5rem;
  color: #555;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Heading>Welcome to Hina's Portfolio</Heading>
      <Subheading>Front-End Web Developer | Designer</Subheading>
    </HeaderContainer>
  );
};

export default Header;
