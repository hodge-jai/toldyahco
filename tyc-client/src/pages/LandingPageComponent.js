import React from "react";
import { Grid, Paper, Button, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "40%",
    height: "70%",
    justify: "flex-center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginLeft: "10%",
    marginRight: "10%",
  },
  paper: {
    flexGrow: 1,
    width: "100%",
    height: "100%",
    padding: "1em 1em 1em 1em",
  },
}));

export default function LandingPageComponent() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Paper className={classes.paper} elevation={3} square>
        <Typography variant="h5" gutterBottom> Welcome to ToldYahCo!</Typography>
        <Typography variant="h6" gutterBottom>
          {" "}
          ToldYahCo is a service that allows you to prove things about yourself
          online without revealing your entire identity!
        </Typography>
        <Typography variant="h6" gutterBottom>
          Through the power of cryptography, users are able to generate a unique
          identifier that they can use to sign messages on any social media
          platform. Other users can then take that unique identifier and the
          signed message and verify the authenticity of the original poster
        </Typography>
      </Paper>
    </Grid>
  );
}
