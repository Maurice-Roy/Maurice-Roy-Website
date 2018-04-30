import React from 'react'
import './DesignPage.css';

class DesignPage extends React.Component {
  render () {
    return (
      <div id="DesignPage" onClick={() => this.props.changeDisplay("LandingPage")}>
        <p id="Images">
          <span className="Line">━━━━━━━━</span><br/><br/>
          ¯\_(ツ)_/¯ WHOA! THERE'S NOTHING HERE YET! ¯\_(ツ)_/¯<br/><br/>
          <span className="Line">━━━━━━━━</span>
        </p>
      </div>
    )
  }
}

export default DesignPage;
