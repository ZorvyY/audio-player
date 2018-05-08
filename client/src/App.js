import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AudioPlayer from './AudioPlayer/AudioPlayer.js';

const info = {'title':'Hol\' Up','artist':'Kendrick Lamar','album':'Section.80','year':'2011-07-02T07:00:00Z','track':'2/16','url':'assets/02 Hol\' Up.mp3'};

class App extends Component {
  render() {
    return (
      <AudioPlayer info={info} isPlaying={false} />
    );
  }
}

export default App;
