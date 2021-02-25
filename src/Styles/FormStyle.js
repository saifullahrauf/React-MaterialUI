import { makeStyles, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    minHeight: "25vh",
  },
  formContent: {},
  inputField: {
    minWidth: "220px",
    margin: "10px",
  },
}));

export default useStyles;
