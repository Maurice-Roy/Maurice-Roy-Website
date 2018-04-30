import React from 'react'
import './LandingPage.css';
import AboutLinkGraphic from './Blocks/AboutLinkGraphic'
import AboutLinkText from './Blocks/AboutLinkText'
import CodingLinkGraphic from './Blocks/CodingLinkGraphic'
import CodingLinkText from './Blocks/CodingLinkText'
import DesignLinkGraphic from './Blocks/DesignLinkGraphic'
import DesignLinkText from './Blocks/DesignLinkText'
import AudioLinkGraphic from './Blocks/AudioLinkGraphic'
import AudioLinkText from './Blocks/AudioLinkText'
import LandingPageHeader from './Blocks/LandingPageHeader'

class LandingPage extends React.Component {
  render (props) {
    return(
      <div id="LandingPage">
        <LandingPageHeader changeDisplay={this.props.changeDisplay}/>
        <AboutLinkGraphic changeDisplay={this.props.changeDisplay}/>
        <AboutLinkText changeDisplay={this.props.changeDisplay}/>
        <CodingLinkGraphic changeDisplay={this.props.changeDisplay}/>
        <CodingLinkText changeDisplay={this.props.changeDisplay}/>
        <DesignLinkGraphic changeDisplay={this.props.changeDisplay}/>
        <DesignLinkText changeDisplay={this.props.changeDisplay}/>
        <AudioLinkGraphic changeDisplay={this.props.changeDisplay}/>
        <AudioLinkText changeDisplay={this.props.changeDisplay}/>
      </div>
    )
  }
}

export default LandingPage;
