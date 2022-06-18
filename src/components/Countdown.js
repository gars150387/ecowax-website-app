import React from "react";
import Countdown from "react-countdown";

import "../styles/countdown.scss";

export const CountdownPromotion = () => {
  // Random component
  const Completionist = () => <span>Se termino las ofertas!</span>;

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span className="countdown-text">
          <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </span>
      );
    }
  };

  return <Countdown date={Date.now() + 14400000} renderer={renderer} />;
};
