import React from "react";
import { Grid, Paper, Button, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import logo4 from "../images/logo4.png";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "20%",
    height: "100%",
    justify: "flex-start",
    alignItems: "center",
  },
  sidebarBackground: {
    height: "100%",
    width: "100%",
    background: "#FFFFFF",
    borderRadius: 0,
  },
  buttonGrid: {
    height: "65%",
  },
  sideBarButtons: {
    height: "25%",
    background: "#FF0000",
    borderRadius: 0,
    color: "white",
    paddingTop: "2em",
    paddingBottom: "2em",
  },
  dividers: {
    background: "#FF0000",
    marginTop: "2em",
    marginBottom: "2em",
  },
  sideBarImage: {
    height: "10%",
    backgroundImage: `url(${logo4})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
    backgroundSize: "contain",
  },
}));

export default function SideBar() {
  const classes = useStyles();
  return (
    <Grid item xs className={classes.root}>
      <Paper className={classes.sidebarBackground}>
        <Grid className={classes.sideBarImage}></Grid>
        <Grid className={classes.buttonGrid}>
          <Divider className={classes.dividers} variant="middle" />
          <Button
            variant="contained"
            className={classes.sideBarButtons}
            fullWidth
          >
            Generate Key Pair
          </Button>
          <Divider className={classes.dividers} variant="middle" />
          <Button
            variant="contained"
            className={classes.sideBarButtons}
            fullWidth
          >
            Sign/Verify Message
          </Button>
          <Divider className={classes.dividers} variant="middle" />
          <Button
            variant="contained"
            className={classes.sideBarButtons}
            fullWidth
          >
            Add Tags
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
}
