import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';

// import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ProjectCard from '../ProjectCard/ProjectCard';




class Project extends Component {

    componentDidMount() {
        this.getProject();
    }

    getProject = () => {
        this.props.dispatch({ type: 'FETCH_PROJECT' })
    }


    render() {
        // if (this.props.projects.name !== null){
        //     return this.props.projects.name;
        // }

        // if (this.props.projects.description !== null){
        //     return this.props.projects.description;
        // }
        // if (this.props.projects.thumbnail !== null) {
        //     return this.props.projects.thumbnail;
        // }
        // if (this.props.projects.website !== null) {
        //     return this.props.projects.website;
        // }
        // if (this.props.projects.github !== null) {
        //     return this.props.projects.github;
        // }
        // if (this.props.projects.date_completed !== null) {
        //     return this.props.projects.date_completed;
        // }

        console.log('PROJECT', this.props.projects);
        const { classes } = this.props;
        return (


            <div>
                
                {this.props.projects.map((project)=>{
                    return (
                        <>
                    <ProjectCard projectId={project.id}
                            projectName={project.name}
                            projectDescription={project.description}
                            projectThumbnail={project.thumbnail}
                            projectWebsite={project.website}
                            projectGithub={project.github}
                            projectDate={project.date}
                            projectTag={project.tag}

                 />
                 </>
                    )
                })}
                

            </div>
            
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
};



export default (connect(mapReduxStateToProps)(Project));