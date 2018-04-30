import React from 'react'
import './DesignPage.css';

class DesignPage extends React.Component {
  render () {
    return (
      <div id="DesignPage" onClick={() => this.props.changeDisplay("LandingPage")}>

      </div>
    )
  }
}

export default DesignPage;
