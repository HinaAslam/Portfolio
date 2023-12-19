import React from 'react';
import styled from 'styled-components';
import Project1 from '../components/images/Project1.mp4';
import Project2 from '../components/images/Project2.mp4';

const ReactNativeContainer = styled.section`
  background: #fff; /* Choose a background color */
  padding: 4rem 0;
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
`;

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
`;

const Video = styled.video`
  width: 300px;
  height: 300px; /* Set the height equal to the width */
  border-radius: 4px;
`;

const ReactNative = () => {
  return (
    <ReactNativeContainer>
      <Title>React Native Projects</Title>
      <VideoContainer>
        <Video controls>
          <source src={Project1} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
        <Video controls>
          <source src={Project2} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      </VideoContainer>
    </ReactNativeContainer>
  );
};

export default ReactNative;