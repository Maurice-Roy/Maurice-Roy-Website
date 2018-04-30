import React from 'react'
import './AudioPage.css';

class AudioPage extends React.Component {
  render () {
    return (
      <div id="AudioPage" onClick={() => this.props.changeDisplay("LandingPage")}>

      </div>
    )
  }
}

export default AudioPage;
