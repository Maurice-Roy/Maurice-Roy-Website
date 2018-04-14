import React from 'react'
import './LandingPage.css';
import AboutLink from './Blocks/AboutLink'
import CodingLink from './Blocks/CodingLink'
import DesignLink from './Blocks/DesignLink'
import AudioLink from './Blocks/AudioLink'
import LandingPageHeader from './Blocks/LandingPageHeader'

class LandingPage extends React.Component {
  render () {
    return(
      <div id="LandingPage">
        <LandingPageHeader/>
        <AboutLink/>
        <CodingLink/>
        <DesignLink/>
        <AudioLink/>
      </div>
    )
  }
}

export default LandingPage;
