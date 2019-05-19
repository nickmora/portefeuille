import React, { Component } from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from "@material-ui/core";

class Project extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Card className>
                <Grid spacing={24} container direction="row">
                    <Grid item sm={6} direction="column" container>
                        <CardContent>

                            <Typography variant="h3" align="center" gutterBottom>
                                {this.props.title}
                            </Typography>
                            <Typography variant="h5">
                                {this.props.description}
                            </Typography>
                            <Typography variant="body1">
                                <ul>
                                    <li>
                                        first item
                                </li>
                                    <li>
                                        Second item
                                </li>
                                    <li>
                                        Third item
                                </li>
                                </ul>
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item sm={6} direction="column" container>
                        <CardMedia
                            component="img"
                            image={this.props.img}
                        />
                        <CardActions>
                            <Button size = "small" color = "primary" target = "_blank" href = {this.props.deployed}>
                                Check it out
                        </Button>
                            <Button size = "small" color = "primary" target = "_blank" href = {this.props.git}>
                                See the GitHub
                        </Button>
                        </CardActions>
                    </Grid>
                </Grid>
            </Card>
        )
    }
}

export default (Project)