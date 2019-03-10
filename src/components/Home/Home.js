import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';

// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Project from '../Project/Project';


class Home extends Component {

    render() {
        return (

            <div className="App">
                <div>
                    <Header />
                </div>
                <div>
                    <Project />
                    <h1>HOME</h1>
                </div>

            </div>

        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Home);