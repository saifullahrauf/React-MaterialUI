import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

const editTheme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const useStyles = makeStyles({
  acBtn: {
    margin: "10px",
  },
});

export { useStyles, editTheme };
