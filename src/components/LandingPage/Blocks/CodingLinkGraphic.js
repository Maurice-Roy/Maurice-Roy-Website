import React from 'react'
import './CodingLinkGraphic.css';
import Computer from '../../../images/Apple-IIGS-Woz-edition2.png'

class CodingLink extends React.Component {
  render () {
    return (
      <div id="CodingLinkGraphic" className="LandingPageBlock" onClick={(e) => this.props.changeDisplay(e)}>
        <div id="ComputerContainer">
          <img id="Computer" src={Computer} alt=""/>
        </div>
      </div>
    )
  }
}

export default CodingLink;
