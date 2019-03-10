import React, { Component } from 'react';
import '../App/App.css';
import {connect} from 'react-redux'

class Header extends Component {
   
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Tj Boyce</h1>
                    <img src="images/tj1.jpg" alt="tj" />
                </header>
        


            </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Header);