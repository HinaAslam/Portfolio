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
      <Content>I'm HINA ASLAM, a dedicated Front-End Developer with a solid foundation in web development. My journey began with a 2-month internship where I honed my skills and gained hands-on experience in crafting intuitive and visually appealing user interfaces.
        Driven by my passion for building dynamic and responsive web applications, I transitioned to React.js, where I spent an additional 2 months refining my expertise. During this time, I had the opportunity to contribute to various projects, mastering the art of creating seamless user experiences.
        In the subsequent phase of my learning journey, I delved into mobile app development using React Native. Under the mentorship of Dynamic Developers, I dedicated 2 months to mastering the intricacies of cross-platform mobile application creation. During this period, I successfully completed two projects, showcasing my ability to extend my skills to new technologies.
</Content>
    </AboutContainer>
  );
};

export default About;
