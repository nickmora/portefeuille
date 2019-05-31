import React from "react"
import bootstrapIcon from "../../images/logos/bootstrap.svg"
import css3Icon from "../../images/logos/css3.svg"
import expressIcon from "../../images/logos/express.svg"
import javascriptIcon from "../../images/logos/javascript.svg"
import materialUIIcon from "../../images/logos/materialUI.svg"
import reactIcon from "../../images/logos/react.svg"
import reduxIcon from "../../images/logos/redux.svg"
import mongodbIcon from "../../images/logos/mongodb.svg"
import nodeIcon from "../../images/logos/node.svg"
import mysqlIcon from "../../images/logos/mysql.svg"
import html5Icon from "../../images/logos/html5.svg"
import { Grid, Card, CardContent } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

const styles = {
    image: {
        height: 35,
        padding: 15
    },
    card: {
        marginTop: 200,
        width: "100%"
    }
}

const TechStack = (props) => {
    const { classes } = props
    return (
        <Grid container spacing={8} justify="center">
            <Grid container item xs={11}>
                <Card className={classes.card}>
                    <CardContent>
                        <Grid container xs={12} justify="center">

                            <Grid item xs={6}>
                                <img className={classes.image} src={bootstrapIcon} alt="bootstrap" />
                                <img className={classes.image} src={css3Icon} alt="css" />
                                <img className={classes.image} src={html5Icon} alt="html" />
                                <img className={classes.image} src={javascriptIcon} alt="javascript" />
                                <img className={classes.image} src={reactIcon} alt="react" />
                                <img className={classes.image} src={reduxIcon} alt="redux" />
                                <img className={classes.image} src={materialUIIcon} alt="materialUI" />
                            </Grid>
                            <Grid item xs={6}>
                                <img className={classes.image} src={expressIcon} alt="express" />
                                <img className={classes.image} src={mongodbIcon} alt="mongo" />
                                <img className={classes.image} src={mysqlIcon} alt="mysql" />
                                <img className={classes.image} src={nodeIcon} alt="node" />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(TechStack)