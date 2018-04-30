import React from 'react'
import './AudioPage.css';

class AudioPage extends React.Component {
  render () {
    return (
      <div id="AudioPage" onClick={() => this.props.changeDisplay("LandingPage")}>
        <p id="Clips">
          <span className="Line">━━━━━━━━</span><br/><br/>
          ¯\_(ツ)_/¯ WHOA! THERE'S NOTHING HERE YET! ¯\_(ツ)_/¯<br/><br/>
          <span className="Line">━━━━━━━━</span>
        </p>
      </div>
    )
  }
}

export default AudioPage;
