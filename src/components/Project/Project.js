import React, { Component } from 'react';
// import './App.css';
import { connect } from 'react-redux';

class Project extends Component {

    componentDidMount(){
     this.getProjects()
    }

    getProjects = ()=>{
        this.props.dispatch({ type: 'FETCH_IT' })
    }
    
    render() {
        return (
            <div className="App">
                {JSON.stringify(this.props.projects)}


            </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Project);