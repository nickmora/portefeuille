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
import { Grid, Card } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

const styles = {
    image: {
        height: 150,
        padding: 25
    }
}

const TechStack = (props) => {
    const { classes } = props
    return (
        <Grid container spacing={16}>
            <Card>
                <Grid container item xs={11}>

                    <Grid item xs={8}>
                        <img className={classes.image} src={bootstrapIcon} />
                        <img className={classes.image} src={css3Icon} />
                        <img className={classes.image} src={html5Icon} />
                        <img className={classes.image} src={javascriptIcon} />
                        <img className={classes.image} src={reactIcon} />
                        <img className={classes.image} src={reduxIcon} />
                        <img className={classes.image} src={materialUIIcon} />
                    </Grid>
                    <Grid item xs={4}>
                        <img className={classes.image} src={expressIcon} />
                        <img className={classes.image} src={mongodbIcon} />
                        <img className={classes.image} src={mysqlIcon} />
                        <img className={classes.image} src={nodeIcon} />
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    )
}

export default withStyles(styles)(TechStack)