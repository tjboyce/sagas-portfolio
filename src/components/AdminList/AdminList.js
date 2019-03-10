import React, { Component } from 'react';
import { connect } from 'react-redux';



class AdminList extends Component {

    


    render() {
        return (
            <div>
                <h4>will display list here</h4>
                

            </div>
        );
    }
}


const mapStateToProps = reduxState => ({
    reduxState,
});



export default connect(mapStateToProps)(AdminList);