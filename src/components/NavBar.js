import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography, Grid } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container 
          // justify="center"
          // alignItems = "center"
          alignContent = "space-between"
          >
            <Grid item md={4}>
              <Typography color = "inherit" variant="h4" align = "center">
                Home
              </Typography>
            </Grid>
            <Grid item md={4}>
              <Typography color = "inherit" variant="h4" align = "center">
                Portfolio
              </Typography>
            </Grid>
            <Grid item md={4}>
              <Typography color = "inherit" variant="h4" align = "center">
                Contact
              </Typography>
            </Grid>
          
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);