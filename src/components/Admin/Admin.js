import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminForm from '../AdminForm/AdminForm';
import AdminList from '../AdminList/AdminList';



const mapStateToProps = reduxState => ({
    reduxState,
});

class Admin extends Component {





    render() {
        return (
            <div>
                <AdminForm />
                <AdminList />

            </div>
        );
    }


}




export default connect(mapStateToProps)(Admin);