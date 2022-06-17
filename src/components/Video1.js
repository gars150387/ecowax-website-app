import React from 'react'
import {
    Player,
    ControlBar,
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,
    VolumeMenuButton
  } from 'video-react';

import '../styles/video.scss'

export const Video1 = () => {
    return (
        <div>
            <div className='video'>
                <Player
                    autoPlay
                    muted
                    src={require('../video/video1.mp4')}
                    className="video-features"
                >
                    <ControlBar disabled className="" >
                        <ReplayControl seconds={10} order={1.1} />
                        <ForwardControl seconds={30} order={1.2} />
                        <CurrentTimeDisplay order={4.1} />
                        <TimeDivider order={4.2} />
                        <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
                        <VolumeMenuButton disabled />
                    </ControlBar>
                </Player>
            </div>
        </div>
    )
}
