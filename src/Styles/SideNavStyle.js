import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  leftNav: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #2468a0, #0a366e)",
  },
  btnBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default useStyles;
