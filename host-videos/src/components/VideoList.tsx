import React from 'react';
import './VideoList.css'; // Import the CSS file for styling
import { Video } from '../utils/types';

interface VideoListProps {
  videos: Video[];
}

const VideoList: React.FC<VideoListProps> = ({ videos }) => {
  return (
    <div className="video-list">
      <h2>List of Videos</h2>
      <div className="cards-container">
        {videos.map((video) => (
          <div className="card" key={video.id}>
            <img src={video.thumbnail} alt={video.title} className="thumbnail" />
            <div className="card-content">
              <h3 className="title">{video.title}</h3>
              <p className="author">Author: {video.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
