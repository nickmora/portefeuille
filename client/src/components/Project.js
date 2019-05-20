import React, { Component } from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, } from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles"

const styles = {
    image:{
        height: 250,
        padding: 25,
    }
}

class Project extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Card className>
                <Grid spacing={24} container direction="row">
                    <Grid item xs={6} direction="column" container>
                        <CardContent>
                            <Typography variant="h3" align="center" gutterBottom>
                                {this.props.title}
                            </Typography>
                            <Typography variant="h5" gutterBottom>
                                {this.props.description}
                            </Typography>
                            <Typography variant="body1">
                                Techs Used:<ul>
                                    {this.props.techs.map(tech => (
                                        <li>
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={6} direction="column" container>
                        <CardMedia
                            className = {classes.image}
                            component="img"
                            image={this.props.img}
                        />
                        <CardActions>
                            <Grid container spacing = {8}>
                                <Grid item xs={6}>

                                    <Button fullWidth size="small" color="primary" target="_blank" href={this.props.deployed}>
                                        Check it out
                        </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button fullWidth size="small" color="primary" target="_blank" href={this.props.git}>
                                        See the GitHub
                        </Button>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Grid>
                </Grid>
            </Card>
        )
    }
}

export default withStyles(styles)(Project)