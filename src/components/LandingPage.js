import React from 'react'
import './LandingPage.css';
import SocialMediaLinks from './SocialMediaLinks'
import MauriceRoyText from '../images/MauriceRoy.svg'

class LandingPage extends React.Component {
  render () {
    return(
      <div id="LandingPage">
        <div id="LandingPageHeader">
          <div id="MyName">
            <img src={MauriceRoyText} alt=""/>
          </div>
          <SocialMediaLinks/>
        </div>
        <div id="AboutLink">

        </div>
        <div id="AppsLink">

        </div>
        <div id="DesignLink">

        </div>
        <div id="AudioLink">

        </div>
      </div>
    )
  }
}

export default LandingPage;
