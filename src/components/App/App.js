import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
// import Project from '../Project/Project';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Admin from '../Admin/Admin';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">

          <div>
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/" component={Home} />

          </div>

        </div>
      </Router>

    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);
