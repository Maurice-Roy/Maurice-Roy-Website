import React from 'react'
import SoundSystem from '../../../images/soundsystem.png'
import './AudioLinkGraphic.css';

class AudioLink extends React.Component {
  render () {
    return (
      <div id="AudioLinkGraphic" className="LandingPageBlock" onClick={() => this.props.changeDisplay("AudioPage")}>
        <div id="SoundSystemContainer">
          <img id="SoundSystem" src={SoundSystem} alt=""/>
        </div>
      </div>
    )
  }
}

export default AudioLink;
