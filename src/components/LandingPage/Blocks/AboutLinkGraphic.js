import React from 'react'
import './AboutLinkGraphic.css';
import MyFace from '../../../images/Mo-Headshot-OlegCutoutBW.png'

class AboutLink extends React.Component {
  render () {
    return (
      <div id="AboutLinkGraphic" className="LandingPageBlock" onClick={() => this.props.changeDisplay("AboutPage")}>
        <div id="FaceContainer">
          <img id="MyFace" src={MyFace} alt=""/>
        </div>
      </div>
    )
  }
}

export default AboutLink;
