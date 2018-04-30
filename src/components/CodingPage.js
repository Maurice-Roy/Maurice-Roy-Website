import React from 'react'
import './CodingPage.css';

class CodingPage extends React.Component {
  synthGH = <a href="https://github.com/Maurice-Roy/Synth" target="_blank">GitHub</a>
  behindTheMusicGH = <a href="https://github.com/Maurice-Roy/Behind-the-Music" target="_blank">GitHub</a>
  playlistCreatorGH = <a href="https://github.com/Maurice-Roy/Playlist-Creator" target="_blank">GitHub</a>
  keystoneGH = <a href="https://github.com/Maurice-Roy/Keystone" target="_blank">GitHub</a>
  synthYT = <a href="https://youtu.be/CJQ59-gyhKU" target="_blank">Demo</a>
  behindTheMusicYT = <a href="https://youtu.be/RP8ZFi4aqJg" target="_blank">Demo</a>
  playlistCreatorYT = <a href="https://youtu.be/em8M3a5RTU0" target="_blank">Demo</a>
  keystoneYT = <a href="https://youtu.be/79KgK_h6GrY" target="_blank">Demo</a>
  render () {
    return (
      <div id="CodingPage" onClick={() => this.props.changeDisplay("LandingPage")}>
        <p id="Projects">
          <span className="Line">━━━━━━━━</span><br/><br/>
          <span className="ProjectTitle">Sympathizer - {this.synthGH} | {this.synthYT}</span><br/>
          <span className="TagLine">A multi-user synthesizer ‘jam-room’ built in React and Rails with WebSocket and Web Audio API</span><br/><br/>
          {/* Used Redux for managing state for multiple users, each with their own local and global settings<br/>
          Implemented ActionCable WebSocket for live connection & audio playback<br/>
          Built a digital synthesizer using the Web Audio API for live manipulable audio synthesis<br/>
          Designed custom CSS for the website layout and appearance<br/><br/> */}
          <span className="Line">━━━━━━━━</span><br/><br/>
          <span className="ProjectTitle">Behind The Music - {this.behindTheMusicGH} | {this.behindTheMusicYT}</span><br/>
          <span className="TagLine">Upload and play audio files to visualize waveforms and spectral data</span><br/><br/>
          {/* Rendered waveforms and spectral analysis over time using D3 and the Web Audio API<br/>
          Utilized Filestack for uploading and hosting files<br/>
          Implemented BCrypt authentication for user log-in/log-out<br/><br/> */}
          <span className="Line">━━━━━━━━</span><br/><br/>
          <span className="ProjectTitle">Playlist Creator - {this.playlistCreatorGH} | {this.playlistCreatorYT}</span><br/>
          <span className="TagLine">A CLI app using the Spotify API to create custom playlists with song data parameters</span><br/><br/>
          {/* Utilized the Spotify API to gather song IDs from a playlist and retrieve their audio features<br/>
          Wrote logic for creating custom playlists based on quantitative data & playing them in the browser<br/><br/> */}
          <span className="Line">━━━━━━━━</span><br/><br/>
          <span className="ProjectTitle">Keystone - {this.keystoneGH} | {this.keystoneYT}</span><br/>
          <span className="TagLine">A Ruby on Rails web app for reviewing architecture around the world</span><br/><br/>
          {/* Scraped Wikipedia for data & images using Nokogiri<br/>
          Created using Ruby on Rails using the full MVC pattern multiple many-to-many relationships */}
          <span className="Line">━━━━━━━━</span>
        </p>
      </div>
    )
  }
}

export default CodingPage;
