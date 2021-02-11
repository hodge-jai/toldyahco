import React from "react";
import { Grid, Paper, Button, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SideBar from "./SideBar";
import LandingPageComponent from "./LandingPageComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    height: "100vh",
    justify: "flex-start",
    alignItems: "center",
    background: "#F5D3D3",
  },
}));

export default function Layout() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <SideBar />
      <LandingPageComponent />
    </Grid>
  )
}
