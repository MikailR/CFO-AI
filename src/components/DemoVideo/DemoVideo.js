import React from "react";
import ReactPlayer from "react-player";
import "./DemoVideo.css";

import logo from "../../assets/thumbnail/thumbnail.png";

export default function DemoVideo() {
  return (
    <div className="demo-video">
      {/* Original youtube video */}
      {/* <iframe
        // width="560"
        // height="315"
        className="demo-video"
        // src="https://www.youtube.com/embed/tTSTFI_cTw4"
        src="https://elite-static.oss-cn-shenzhen.aliyuncs.com/CFO%20AI%20Demo%20Video.mp4"
        frameborder="0"
        allow="accelerometer; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> */}

      <ReactPlayer
        className="demo-video-player"
        height="100%"
        width="100%"
        controls
        playing
        light={logo}
        url="https://elite-static.oss-cn-shenzhen.aliyuncs.com/CFO%20AI%20Demo%20Video.mp4"
      />
    </div>
  );
}
