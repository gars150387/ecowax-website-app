import React from "react";
import {
  Player,
  ControlBar,
} from "video-react";

import "../styles/video.scss";

export const Video1 = () => {
  return (
    <div>
      <div className="video">
        <Player autoPlay muted src={require("../video/video1.mp4")}>
          <ControlBar autoHide={true} className="" />
        </Player>
      </div>
    </div>
  );
};
