import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Home from "./Pages/About"
import Contact from "./Pages/Contact"
import Portfolio from "./Pages/Portfolio"
import Welcome from "./Pages/Welcome"
import About from './Pages/About';
import { SvgIcon } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton"



function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

// function LinkTab(props) {
//   return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
// }

function Monogram(props) {
  return (

      <SvgIcon {...props} >
        {<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />}
      </SvgIcon>
  )
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class NavTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <NoSsr>
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs variant="fullWidth" value={value} onChange={this.handleChange}>
              <Tab icon = {<Monogram color = "inherit" />} />
              {/* <a href="/home" onClick={event => event.preventDefault()} {...props}>
                <img width={72} src={require("../images/monogram.svg")} />
              </a> */}
              <Tab label="About" />
              <Tab label="Contact" />
              <Tab label="Portfolio" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer> <Welcome /> </TabContainer>}
          {value === 1 && <TabContainer> <About /> </TabContainer>}
          {value === 2 && <TabContainer> <Contact /> </TabContainer>}
          {value === 3 && <TabContainer> <Portfolio /> </TabContainer>}
        </div>
      </NoSsr>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);