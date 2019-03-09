import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Project from '../Project/Project'

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <header className= "App-header">
          <h1>Tj Boyce</h1>
          <img src= "images/tj1.jpg"/>
      </header>

      <div>
        <Project />
      </div>
        

      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);
