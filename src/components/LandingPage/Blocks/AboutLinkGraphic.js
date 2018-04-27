import React from 'react'
import './AboutLinkGraphic.css';
import MyFace from '../../../images/Mo-Headshot-OlegCutout BW.png'

class AboutLink extends React.Component {
  render () {
    return (
      <div id="AboutLinkGraphic" className="LandingPageBlock" onClick={(e) => this.props.changeDisplay(e)}>
        <div id="FaceContainer">
          <img id="MyFace" src={MyFace} alt=""/>
        </div>
      </div>
    )
  }
}

export default AboutLink;