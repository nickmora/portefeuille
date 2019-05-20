import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { Typography, CardContent, SvgIcon, CardActions, Button, Avatar} from "@material-ui/core";
import headshot from "../../images/headshot.jpg"


const styles = {
    avatar: {
        margin: 15,
        width: 200,
        height: 200,
        border: "solid",
        borderColor: "gray",
        borderWidth: 5
    },
    card: {
        marginTop: 50,
        width: "100%"
    }
}

class About extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Grid
                    container
                    spacing={32}
                    justify = "center"
                >
                    <Grid
                        item
                        sm={11}
                        container
                        justify="center"
                        
                    >
                        <Card className={classes.card}>
                            <CardContent>

                                <Grid item md={12} container justify="center">

                                    <Avatar
                                        className={classes.avatar}
                                        src={headshot}
                                        alt="Nick Morales Design"
                                    />

                                </Grid>

                                <CardActions>
                                    <Grid spacing={8} item md = {12} lg = {12} container justify="center">
                                        <Grid item xs = {3} sm = {3} md={3} lg = {1}>
                                            <Button
                                                fullWidth
                                                target="_blank"
                                                href="https://github.com/nickmora"
                                            >

                                                <SvgIcon viewBox="0 0 24 24">
                                                    <path fill="#000000" d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H14.56C14.24,20.93 14.23,20.32 14.23,20.11L14.24,17.64C14.24,16.8 13.95,16.25 13.63,15.97C15.64,15.75 17.74,15 17.74,11.53C17.74,10.55 17.39,9.74 16.82,9.11C16.91,8.89 17.22,7.97 16.73,6.73C16.73,6.73 15.97,6.5 14.25,7.66C13.53,7.46 12.77,7.36 12,7.35C11.24,7.36 10.46,7.46 9.75,7.66C8.03,6.5 7.27,6.73 7.27,6.73C6.78,7.97 7.09,8.89 7.18,9.11C6.61,9.74 6.26,10.55 6.26,11.53C6.26,15 8.36,15.75 10.36,16C10.1,16.2 9.87,16.6 9.79,17.18C9.27,17.41 7.97,17.81 7.17,16.43C7.17,16.43 6.69,15.57 5.79,15.5C5.79,15.5 4.91,15.5 5.73,16.05C5.73,16.05 6.32,16.33 6.73,17.37C6.73,17.37 7.25,19.12 9.76,18.58L9.77,20.11C9.77,20.32 9.75,20.93 9.43,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" />
                                                </SvgIcon>
                                            </Button>
                                        </Grid>
                                        <Grid item xs = {3} sm = {3} md={3} lg = {1}>
                                            <Button
                                                fullWidth
                                                target="_blank"
                                                href="https://www.instagram.com/nickmoralesdesign/"
                                            >
                                                <SvgIcon viewBox="0 0 24 24">
                                                    <path fill="#000000" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                                                </SvgIcon>
                                            </Button>
                                        </Grid>
                                        <Grid item xs = {3} sm = {3} md={3} lg = {1}>
                                            <Button
                                                fullWidth
                                                target="_blank"
                                                href="https://www.linkedin.com/in/nick-morales-970437173/"
                                            >

                                                <SvgIcon viewBox="0 0 24 24">
                                                    <path fill="#000000" d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
                                                </SvgIcon>
                                            </Button>
                                        </Grid>
                                        <Grid item xs = {3} sm = {3} md={3} lg = {1}>
                                            <Button
                                                fullWidth
                                                target="_blank"
                                                href="mailto:nickmoralesdesign@gmail.com"
                                            >

                                                <SvgIcon viewBox="0 0 24 24">
                                                    <path fill="#000000" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                                                </SvgIcon>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                                <Typography variant="h3" align="center" gutterBottom>
                                    Nick Morales Design
                                </Typography>
                                <Typography variant="h6" align="center">
                                    Full Stack Web Developer <span>|</span> Graphic Arts & Design
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item md={12} container justify="center">
                        <Grid item md={11} >
                            <Card >
                                <CardContent>
                                    <Typography
                                        paragraph
                                        variant="h5"
                                        component="h2"
                                    >
                                        Nick Morales is a full stack developer specializing in the MERN (MongoDB, React.js, Express.js, Node.js) stack.  Based out of Oakland, California, he is available for full-time employment whilst hopping from freelance gig to freelance gig.  Please checkout the Contact page if you would like to get in touch for a commission and / or collaboration
                                </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(About);