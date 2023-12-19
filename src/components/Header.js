import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../components/images/BackgroundImage.jpg';

const HeaderContainer = styled.header`
  position: relative;
  padding: 4rem 0;
  text-align: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(8px); /* Adjust the blur value as needed */
  z-index: -1;
  background-color: #9bc1bc; /* Set the background color here */
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #e6ebe0; /* Set the font color here */
`;

const Subheading = styled.p`
  font-size: 1.5rem;
  color: #e6ebe0; /* Set the font color here */
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Background />
      <Heading>Welcome to Hina's Portfolio</Heading>
      <Subheading>Mobile App Developer (React Native)</Subheading>
    </HeaderContainer>
  );
};

export default Header;
