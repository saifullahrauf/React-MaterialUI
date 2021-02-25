import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    background: "linear-gradient(45deg, #2468a0, #0a366e)",
  },
  companyName: {
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(5),
  },
  navBtn: {
    color: "#e9e9e9",
  },
}));

export default useStyles;
