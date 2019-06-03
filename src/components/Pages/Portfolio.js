import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid"
import Project from "../Project"
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
                        <Grid item key={project.id} xs={11}>
                            <Project 
                                title={project.title}
                                img={project.img}
                                description={project.description}
                                deployed={project.deployed}
                                altText={project.altText}
                                git={project.git}
                                techs = {project.techs}
                                key = {project.id}
                            />
                        
                        </Grid>
                    ))}
                </Grid>
            </Fragment>
        )
    }
}

export default Portfolio;