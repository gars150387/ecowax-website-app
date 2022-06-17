import React from 'react'
import Slider from 'react-slick'
import { Setting } from '../components/Setting'

import { Video1 } from '../components/Video1';
import { Video2 } from '../components/Video2';
import { Video3 } from '../components/Video3';
import { Video4 } from '../components/Video4';

import '../styles/video.scss'

export const Video = () => {
  return (
    <div className="video-container">
      <Slider {...Setting}>
        <Video1 />
        <Video2 />
        <Video3 />
        <Video4 />
      </Slider>
    </div>
  );
}
