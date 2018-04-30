import React from 'react'
import './CodingPage.css';

class CodingPage extends React.Component {
  render () {
    return (
      <div id="CodingPage" onClick={() => this.props.changeDisplay("LandingPage")}>

      </div>
    )
  }
}

export default CodingPage;
