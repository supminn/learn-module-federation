import React from 'react';
import VideoList from './components/VideoList';
import { dummyVideos } from './utils/sampleData';
import reactLogo from './assets/react.svg'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Header from "headerApp/Header";

const App: React.FC = () => {

  return (
    <div>
      <Header logo={reactLogo} title="My Videos"/>
      <VideoList videos={dummyVideos} />
    </div>
  );
};

export default App;
