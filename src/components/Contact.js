import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  background: #fff;
  padding: 4rem 0;
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  width: 300px;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  margin-bottom: 1rem;
  width: 300px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: #333;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <Title>Contact</Title>
      <Form>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <TextArea placeholder="Message" rows="4" />
        <Button type="submit">Submit</Button>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
