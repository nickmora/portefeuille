import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '../Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper"
import monogram from "../../images/mukTown.jpg"
const projects = require("../../projects.json")

const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    icon: {
        marginRight: theme.spacing.unit * 2,
    },
    heroContent: {
        maxWidth: 1200,
        height: 500,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
        backgroundImage: `url(${monogram})`
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2
    }
});


class Welcome extends React.Component {

    state = {
        projects: projects
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline />
                <main>
                    {/* Hero unit */}
                    <div className={classes.heroUnit}>
                        <div className={classes.heroContent}>
                            <Typography component="h1" variant="h2" align="center" color="primaryLight" gutterBottom>
                                Nick Morales Design
                            </Typography>
                            <Typography variant="h6" align="center" color="textSecondary" paragraph>
                                Cutting edge Web Development and Graphic Design
                            </Typography>
                            <div className={classes.heroButtons}>
                                <Grid container spacing={16} justify="center">
                                    <Grid item>
                                        <Button variant="contained" color="primary">
                                            Contact Me
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color="primary">
                                            Cherchez mon portefeuille
                                        </Button>
                                    </Grid>

                                </Grid>
                            </div>
                        </div>
                    </div>
                    <div className={classNames(classes.layout, classes.cardGrid)}>
                        {/* End hero unit */}
                        <Paper className={classes.paper}>

                            <Grid container
                                spacing={16}
                            // alignContent = "center"
                            >
                                <Grid item md={12}>
                                    <Paper className={classes.paper}>

                                        <Typography
                                            variant="h4"
                                            color="inherit"
                                            align="center"
                                        >
                                            Portfolio Highlights
                                    </Typography>
                                    </Paper>
                                </Grid>
                                {this.state.projects.map(project => (
                                    <Grid item key={project.id} md={4}>
                                        <Card
                                            title={project.title}
                                            img={project.img}
                                            description={project.description}
                                            deployed={project.deployed}
                                            altText={project.altText}
                                            git={project.git}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Paper>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}


Welcome.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Welcome);