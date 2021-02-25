import { BrowserRouter as Router, Route } from "react-router-dom";
import AppTheme from "./Styles/AppTheme.js";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import NavBar from "./Components/Common/NavBar.js";
import SideNav from "./Components/Common/SideNav.js";
import ShiftForm from "./Components/ShiftPage/ShiftForm.js";
import EmployeeForm from "./Components/EmployeePage/EmployeeForm.js";
import ShiftTable from "./Components/ShiftPage/ShiftTable.js";
import EmployeeTable from "./Components/EmployeePage/EmployeeTable.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  App: {
    backgroundColor: "#f0f6fa",
  },
  gridItem: {
    paddingTop: theme.spacing(10),
    overflowX: "auto",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={AppTheme}>
      <Router>
        <NavBar />
        <Grid container className={classes.App}>
          <CssBaseline />
          <Grid item container md={3} lg={2}>
            <SideNav />
          </Grid>
          <Grid
            item
            container
            xs={12}
            md={9}
            lg={10}
            alignItems="center"
            justify="space-around">
            <Grid
              item
              xs={11}
              sm={11}
              md={10}
              lg={10}
              className={classes.gridItem}>
              <Route path="/shifts" component={ShiftForm} />
              <Route path="/employees" component={EmployeeForm} />
            </Grid>
            <Grid
              item
              xs={11}
              sm={11}
              md={10}
              lg={10}
              className={classes.gridItem}>
              <Route path="/shifts" component={ShiftTable} />
              <Route path="/employees" component={EmployeeTable} />
            </Grid>
          </Grid>
        </Grid>
      </Router>
    </ThemeProvider>
  );
};

export default App;
