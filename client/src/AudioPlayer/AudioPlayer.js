import React, { Component } from 'react';
import '../App.css';
import playImg from './play_arrow.svg';

// audio source
const streamUrl = 'http://localhost:1337/assets/02 Hol\' Up.mp3';

const info = {'title':'Hol\' Up','artist':'Kendrick Lamar','album':'Section.80','year':'2011-07-02T07:00:00Z','track':'2/16','url':'assets/02 Hol\' Up.mp3'};

const AudioPlayer = () => (
    <div className={'player-container'}>
      <h1 className={'title'}>{info.title}</h1><br/>
      <h2 className={'artist'}>{info.artist}</h2><br/>
      <img src={playImg}/>
      <h3 className={'album'}>{info.album}</h3><br/>
      <button className={'Play'}><img src={playImg}/></button>
    </div>
);

export default AudioPlayer;
