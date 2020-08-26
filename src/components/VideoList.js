import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  
  // Map through videos prop
  const renderedList = videos.map((video) => {
    return <VideoItem video={video} />;
  });

  
  return <div>{renderedList}</div>;
};

export default VideoList;
