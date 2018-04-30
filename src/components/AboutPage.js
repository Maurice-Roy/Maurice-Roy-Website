import React from 'react'
import './AboutPage.css';

class AboutPage extends React.Component {
  render (props) {
    return (
      <div id="AboutPage" onClick={() => this.props.changeDisplay("LandingPage")}>

      </div>
    )
  }
}

export default AboutPage;
