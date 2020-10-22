import React from "react";
import "./DemoVideo.css";

export default function DemoVideo() {
  return (
    <div className="demo-video-container flex-center-row">
      <iframe
        // width="560"
        // height="315"
        className="demo-video"
        src="https://www.youtube.com/embed/rvLrWYl8N-o"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
