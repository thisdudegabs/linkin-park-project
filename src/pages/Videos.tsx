import React, { FC } from "react";
import "../styles/videos.css";

const videos = [
  "https://www.youtube.com/embed/iKBCVZqqooY",
  "https://www.youtube.com/embed/7NK_JOkuSVY",
  "https://www.youtube.com/embed/v2H4l9RpkwM",
  "https://www.youtube.com/embed/kXYiU_JCYtU",
  "https://www.youtube.com/embed/5qF_qbaWt3Q",
  "https://www.youtube.com/embed/ysSxxIqKNN0",
  "https://www.youtube.com/embed/0xyxtzD54rM",
];

const Videos: FC = () => {
  return (
    <div className="video-container">
      {videos.map((video, index) => (
        <iframe
          key={index}
          src={video}
          title={`Video ${index}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="video"
        />
      ))}
    </div>
  );
};

export default Videos;
