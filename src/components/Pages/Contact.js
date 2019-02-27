import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Card, CardActionArea, CardContent, Typography, Grid, Paper, Button } from '@material-ui/core';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

class Contact extends Component {
    state = {
        name: '',
        age: '',
        multiline: '',
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <Grid 
                    container 
                    // alignContent="center"
                >
                    <Grid item md={12}>
                        <Card>
                            <CardContent>
                                <Typography variant="h2" component="h1" align="center">
                                    Contact Me
                                </Typography>
                                <Grid 
                                    container 
                                    direction="column" 
                                    // justify = "center"
                                    // alignContent="center"
                                >
                                    <Grid item md={8}>
                                        <Paper style={{ padding: 24 }}>
                                            <form className={classes.container} noValidate autoComplete="off">
                                                <Grid item md={12}>
                                                    <TextField
                                                        required
                                                        style={{ margin: 8 }}
                                                        fullWidth
                                                        id="standard-name"
                                                        label="Subject"
                                                        // className={classes.textField}
                                                        value={this.state.subject}
                                                        onChange={this.handleChange('subject')}
                                                        margin="normal"

                                                    />
                                                </Grid>
                                                <Grid item md={12}>
                                                    <TextField
                                                        required
                                                        style={{ margin: 8 }}
                                                        fullWidth
                                                        id="standard-name"
                                                        label="Name"
                                                        value={this.state.name}
                                                        onChange={this.handleChange('name')}
                                                        margin="normal"

                                                    />
                                                </Grid>
                                                <Grid item md={12}>
                                                    <TextField
                                                        required
                                                        style={{ margin: 8 }}
                                                        fullWidth
                                                        id="standard-name"
                                                        label="Email"
                                                        value={this.state.email}
                                                        onChange={this.handleChange('email')}
                                                        margin="normal"

                                                    />
                                                </Grid>
                                                <Grid item md={12}>
                                                    <TextField
                                                        required
                                                        style={{ margin: 8 }}
                                                        fullWidth
                                                        id="standard-name"
                                                        label="Phone Number"
                                                        value={this.state.phone}
                                                        onChange={this.handleChange('phone')}
                                                        margin="normal"

                                                    />
                                                </Grid>
                                                <Grid item md={12}>
                                                    <TextField
                                                        fullWidth
                                                        style={{ margin: 8 }}
                                                        id="standard-multiline-flexible"
                                                        label="Message Body"
                                                        multiline
                                                        rowsMax="4"
                                                        value={this.state.body}
                                                        onChange={this.handleChange('body')}
                                                        margin="normal"
                                                        required
                                                    />
                                                </Grid>
                                                <Grid container justify="flex-end">
                                                    <Grid item>
                                                        <Button className={classes.button} variant="contained" color="primary">
                                                            Submit
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Fragment>
        );
    }
}

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
