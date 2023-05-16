import React from 'react';
import styled from 'styled-components';
import portfolioImage1 from '../components/images/portfolioImage1.png';
import portfolioImage2 from '../components/images/portfolioImage2.jpg';
import portfolioImage3 from '../components/images/portfolioImage3.png';


const ServicesContainer = styled.section`
  background: #f2f2f2;
  padding: 4rem 0;
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 1rem;
  text-align: center;
`;

const WebsiteImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const WebsiteTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const WebsiteLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: bold;

  &:hover {
    color: #555;
  }
`;
const Services = () => {
  const portfolioWebsites = [
    {
      title: 'EDU Meeting',
      image: portfolioImage1,
      link: 'https://www.example1.com',
    },
    {
      title: 'klassy Cafe',
      image: portfolioImage2,
      link: 'https://www.example2.com',
    },
    {
      title: 'Enavo Market',
      image: portfolioImage3,
      link: 'https://www.example3.com',
    },
  ];

  return (
    <ServicesContainer id="services">
      <Title>Services</Title>
      <CardContainer>
        {portfolioWebsites.map((website, index) => (
          <Card key={index}>
            <WebsiteImage src={website.image} alt={website.title} />
            <WebsiteTitle>{website.title}</WebsiteTitle>
            <WebsiteLink href={website.link} target="_blank" rel="noopener noreferrer">
              View Website
            </WebsiteLink>
          </Card>
        ))}
      </CardContainer>
    </ServicesContainer>
  );
};

export default Services;
