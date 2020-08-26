import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video }) => {
  const { thumbnails, title } = video.snippet;

  return (
    <div className="video-item item ">
      <img className="ui image" src={thumbnails.medium.url} />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
