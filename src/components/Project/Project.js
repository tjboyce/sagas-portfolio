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

const styles = {
    card: {
        width: 275,
        margin: 25,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        margin: 12,
    },

};


class Project extends Component {

    componentDidMount() {
        this.getProject();
    }// run getProject when the page loads.

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

        console.log('this.props.reduxState.projects:', this.props.reduxState.project);
        const { classes } = this.props;
        return (


            <div>
                <div className="App">
                    <Card className={classes.card} >
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Project: {this.props.reduxState.projects.name}
                                {this.props.github}
                                {this.props.website}
                                {this.props.date_completed}
                                {this.props.description}
                            </Typography>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Project Pegasus: {this.props.name}
                            </Typography>
                            <img src="images/Screen1.png" />
                        </CardContent>
                    </Card>
                </div>
                <div className="App">
                    <Card className={classes.card} >
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Project Name: {this.props.plantKingdom}
                            </Typography>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Project NTM: {this.props.plantName}
                            </Typography>
                            <img src="images/ScreenGarden.png" />
                        </CardContent>
                    </Card>

                </div>
            </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

Project.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(connect(mapReduxStateToProps)(Project));