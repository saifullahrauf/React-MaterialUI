import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import { ThemeProvider } from "@material-ui/core/styles";
import { useStyles, editTheme } from "../../Styles/ActionButtonStyle.js";

const ActionButton = (props) => {
  const classes = useStyles();
  if (props.type === "edit") {
    return (
      <ThemeProvider theme={editTheme}>
        <Button
          variant="contained"
          color="primary"
          onClick={props.onClick}
          className={classes.acBtn}>
          <EditIcon fontSize="small" style={{ fill: "#fff" }} />
        </Button>
      </ThemeProvider>
    );
  } else if (props.type === "delete") {
    return (
      <Button
        variant="contained"
        color="secondary"
        onClick={props.onClick}
        className={classes.acBtn}>
        <DeleteIcon fontSize="small" style={{ fill: "#fff" }} />
      </Button>
    );
  } else {
    return (
      <Button
        variant="contained"
        color="primary"
        onClick={props.onClick}
        className={classes.acBtn}>
        <RadioButtonCheckedIcon fontSize="small" style={{ fill: "#fff" }} />
      </Button>
    );
  }
};

export default ActionButton;
