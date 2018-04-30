import React from 'react'
import './DesignLinkGraphic.css';
import Camera from '../../../images/polaroid leak.png'

class DesignLink extends React.Component {
  render () {
    return (
      <div id="DesignLinkGraphic" className="LandingPageBlock" onClick={() => this.props.changeDisplay("DesignPage")}>
        <div id="CameraContainer">
          <img id="Camera" src={Camera} alt=""/>
        </div>
      </div>
    )
  }
}

export default DesignLink;
