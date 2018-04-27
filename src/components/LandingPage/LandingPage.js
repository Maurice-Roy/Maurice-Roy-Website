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
  render () {
    return(
      <div id="LandingPage">
        <LandingPageHeader/>
        <AboutLinkGraphic/>
        <AboutLinkText/>
        <CodingLinkGraphic/>
        <CodingLinkText/>
        <DesignLinkGraphic/>
        <DesignLinkText/>
        <AudioLinkGraphic/>
        <AudioLinkText/>
      </div>
    )
  }
}

export default LandingPage;
