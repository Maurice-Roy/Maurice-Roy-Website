import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage'
import AboutPage from './components/AboutPage'
import AppsPage from './components/AppsPage'
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
        return <AboutPage/>
      case "AppsPage":
        return <AppsPage/>
      case "AudioPage":
        return <AudioPage/>
      case "DesignPage":
        return <DesignPage/>
      default:
        console.log("Hit default in displaySwitch!")
    }
  }

  changeDisplay = (event) => {
    this.setState({
      currentDisplay: event.target.key
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
