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
    marginLeft: '10%',
    marginRight: '10%',
  },
  paper: {
    flexGrow: 1,
    width: "100%",
    height: "100%",

  },
}));

export default function LandingPageComponent() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Paper className={classes.paper} >
      </Paper>
    </Grid>
  )
}
