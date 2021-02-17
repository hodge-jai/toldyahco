import { createMuiTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontSize: 12,
    fontWeight: "bold",
    subtitle1: {
      color: "#FF510C",
    },
    button: {
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
    h5: {
      fontWeight: "bold",
    },
  },
  palette: {
    primary: { main: "#FF0000" },
    secondary: { main: "#DE6468" },
  },
});
