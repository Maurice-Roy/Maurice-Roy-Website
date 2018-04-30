import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage'
import AboutPage from './components/AboutPage'
import CodingPage from './components/CodingPage'
import AudioPage from './components/AudioPage'
import DesignPage from './components/DesignPage'

class App extends Component {
  state = {
    currentDisplay: "LandingPage"
  }

  displaySwitch = () => {
    switch(this.state.currentDisplay){
      case "LandingPage":
        return <LandingPage changeDisplay={this.changeDisplay}/>
      case "AboutPage":
        return <AboutPage changeDisplay={this.changeDisplay}/>
      case "CodingPage":
        return <CodingPage changeDisplay={this.changeDisplay}/>
      case "AudioPage":
        return <AudioPage changeDisplay={this.changeDisplay}/>
      case "DesignPage":
        return <DesignPage changeDisplay={this.changeDisplay}/>
      default:
        console.log("Hit default in displaySwitch!")
    }
  }

  changeDisplay = (newDisplay) => {
    console.log(newDisplay);
    this.setState({
      currentDisplay: newDisplay
    })
  }

  render() {
    return (
      <div className="App">
        {this.displaySwitch()}
      </div>
    );
  }
}

export default App;
