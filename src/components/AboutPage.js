import React from 'react'
import './AboutPage.css';

class AboutPage extends React.Component {
  render (props) {
    return (
      <div id="AboutPage" onClick={() => this.props.changeDisplay("LandingPage")}>
        <p id="Bio">
          <span className="Line">━━━━━━━━</span><br/><br/>
          Full stack web developer with a passion for visual and auditory arts, and a strong drive to create a meaningful impact in the world through technology. With experience in Ruby on Rails, JavaScript, and React and a background in design and audio engineering, I bring an acute attention to detail and a unique perspective to all projects I’m involved in. My skills include strong communication, adaptability, team-building, and project management that help companies find creative solutions with innovative technology. Brooklynite running a sound system for sold-out events in Brooklyn, designing custom graphics, and managing multilingual production teams.<br/><br/>
          <span className="Line">━━━━━━━━</span>
        </p>
      </div>
    )
  }
}

export default AboutPage;
