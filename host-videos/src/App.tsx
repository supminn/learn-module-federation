import React from 'react';
import VideoList from './components/VideoList';
import { dummyVideos } from './utils/sampleData';

const App: React.FC = () => {

  return (
    <div>
      <VideoList videos={dummyVideos} />
    </div>
  );
};

export default App;
