import React, { Component } from 'react';
import '../App/App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class Admin extends Component {
    state = {
        name: '',
        date_completed: '',
        tag: '',
        github: '',
        website: '',
        description: '',
        thumbnail: '',
        
    };
    onSubmit = () => {
        console.log('going to get projects');
        this.props.dispatch({ type: 'ADD_PROJECT', payload: this.state });
    }
   
    componentDidMount() {
        this.getProjects();
    }
    onChange = (property) => (event) => {
        console.log(event.target.value)
        event.preventDefault();
        this.setState({
            ...this.state,
            [property]: event.target.value,
        });
    };
    handleClick = (event) => {
        event.preventDefault();
    };
    getProjects = () => {
        //make call to server using axios
        console.log('going to get projects');
        this.props.dispatch({ type: 'FETCH_PROJECT' });
    }


    adminList() {
        
        
        return this.props.projects.map(projectto =>
                <tr key={projectto.id}>
                <td> {projectto.name} </td>
                <td> {projectto.description}</td>
                <td> <button onClick={this.onDelete(projectto.id)} className="deleteButton">Delete</button> </td>
            </tr>
        )
    }
    onDelete = (id) => () => {
        console.log('deleting id', id);
        this.props.dispatch({ type: 'DELETE_PROJECT', payload: id });
    }
    
    render() {
       
        console.log( this.props.projects);
        
        return (
            <div>
                <div className="box">
                    <h1>Admin Page</h1>
                    <Link to="/">Back to Project</Link>
                    <h2>Add New Project</h2>
                    <input type="text" placeholder="Name" value={this.state.name} onChange={this.onChange('name')} />
                    <input type="date" value={this.state.date} onChange={this.onChange('date_completed')} />
                    <select value={this.state.tag} onChange={this.onChange('tag')}>
                        <option value="1">Add Technology</option>
                        <option value="2">React</option>
                        <option value="3">jQuery</option>
                        <option value="4">Node</option>
                        <option value="5">SQL</option>
                        <option value="6">Redux</option>
                        <option value="7">HTML</option>
                    </select><br />
                    <input type="text" placeholder="GitHub URL" value={this.state.git} onChange={this.onChange('github')} />
                    <input type="text" placeholder="Web URL" value={this.state.web} onChange={this.onChange('website')} />
                    <select value={this.state.thumbnail} onChange={this.onChange('thumbnail')}>
                        <option value=" " >Add Image</option>
                        <option >Garden</option>
                        <option>Dog Gallery</option>
                        <option >Feedback</option>
                        <option >Pizza</option>
                       
                    </select><br />
                    <input className = "inputBox" type="text" placeholder="Description" value={this.state.description} onChange={this.onChange('description')} /><br />
                    <button onClick={this.onSubmit}>Submit</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.adminList()}
                    </tbody>
                </table>
            </div>
        );
    }
}
const mapReduxToProps = (reduxState) => {
    return reduxState;
};
export default connect(mapReduxToProps)(Admin);