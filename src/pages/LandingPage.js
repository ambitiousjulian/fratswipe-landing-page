import React from 'react';
import styled from 'styled-components';

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #fff;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #fff;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const LandingPage = () => (
  <LandingPageContainer>
    <Title>Welcome to FratSwipe</Title>
    <Subtitle>The Ultimate Fraternity Connection App</Subtitle>
    <Button>Get Started</Button>
  </LandingPageContainer>
);

export default LandingPage;

