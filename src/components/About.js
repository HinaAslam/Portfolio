import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  background: #fff;
  padding: 4rem 0;
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
`;

const Content = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <Title>About</Title>
      <Content>I am a passionate frontend React.js developer with 8 months of experience, specializing in building modern and responsive web applications. My expertise lies in creating intuitive user interfaces and optimizing performance for an enhanced user experience.</Content>
    </AboutContainer>
  );
};

export default About;
