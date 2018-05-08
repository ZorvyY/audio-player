import React, { Component } from 'react';
import '../App.css';
import './AudioPlayer.css';
import playImg from './play_circle_filled.svg';
import pauseImg from './pause_circle_filled.svg';

// audio source
const streamUrl = 'http://localhost:1337/assets/02 Hol\' Up.mp3';

//const info = {'title':'Hol\' Up','artist':'Kendrick Lamar','album':'Section.80','year':'2011-07-02T07:00:00Z','track':'2/16','url':'assets/02 Hol\' Up.mp3'};

/*
const AudioPlayer = () => (
    <div className={'player-container'}>
      <span className={'title'}>{info.title}</span><br/>
      <span className={'artist'}>{info.artist}</span>
      <span class="second-line-separator">•</span>
      <span className={'album'}>{info.album}</span><br/>
      <button className={'play'}><img src={playImg}/></button>
    </div>
);
*/

const AudioPlayer = ({info, isPlaying}) => (
    <div className={'player-container'}>
      <span className={'title'}>{info.title}</span><br/>
      <span className={'artist'}>{info.artist}</span>
      <span className="second-line-separator">•</span>
      <span className={'album'}>{info.album}</span><br/>
      <button className={'play'}><img src={isPlaying ? playImg : pauseImg} alt='pause/play'/></button>
    </div>
);

export default AudioPlayer;
