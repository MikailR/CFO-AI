import React from "react";
import "./DemoVideo.css";

export default function DemoVideo() {
  return (
    <div className="demo-video-container flex-center-row">
      <iframe
        // width="560"
        // height="315"
        className="demo-video"
        // src="https://www.youtube.com/embed/tTSTFI_cTw4"
        src="https://elite-static.oss-cn-shenzhen.aliyuncs.com/CFO%20AI%20Demo%20Video.mp4"
        frameborder="0"
        allow="accelerometer; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
