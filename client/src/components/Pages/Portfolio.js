import React, { Component, Fragment } from "react";
import Card from "../Card";
import Grid from "@material-ui/core/Grid"
const projects = require("../../projects.json")

class Portfolio extends Component {
    state = {
        projects: projects
    }
    render() {
        return (
            <Fragment>

                <Grid 
                    container 
                    spacing = {24}
                    justify = "center"
                >


                    {this.state.projects.map(project => (
                        <Grid item key={project.id} sm={4}>
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
            </Fragment>
        )
    }
}

export default Portfolio;