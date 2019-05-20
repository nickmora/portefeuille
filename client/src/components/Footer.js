import React from "react";
import { Typography, Card, CardContent } from "@material-ui/core";

const Footer = props => {
    return (
        <footer>
            <Card>
                <CardContent>

                    <Typography
                        variant="h4"
                        component="h4"
                        align="center"
                    >
                        Copyright Nick Morales Design &copy; 2019
                    </Typography>
                </CardContent>
            </Card>
        </footer>
    )
}

export default (Footer)

