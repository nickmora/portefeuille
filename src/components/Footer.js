import React from "react";
import { Typography, Card, CardContent, Grid } from "@material-ui/core";

const Footer = () => {
    return (
        <div>
            <Grid container spacing={24} justify = "center">
                <Grid item xs={11}>
                    <Card>
                        <CardContent>

                            <Typography
                                variant="body1"
                                component="h4"
                                align="center"
                            >
                                Copyright Nick Morales Design &copy; 2019
                    </Typography>
                        </CardContent>
                    </Card>

                </Grid>
            </Grid>

        </div>
    )
}

export default (Footer)

