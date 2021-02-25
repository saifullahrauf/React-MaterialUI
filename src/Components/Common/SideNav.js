import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import styles from "../../Styles/SideNavStyle";
import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";

const SideNav = () => {
  const classes = styles();
  const [drawerCondition, setDrawerCondition] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth < 960) {
        setDrawerCondition(true);
      } else setDrawerCondition(false);
    };

    window.addEventListener("resize", checkScreen);
  }, []);

  if (drawerCondition === false) {
    return (
      <Container className={classes.leftNav}>
        <Toolbar className={classes.btnBox}>
          <RouterLink
            to="/shifts"
            style={{ textDecoration: "none", color: "black", width: "100%" }}>
            <Button
              variant="contained"
              color="default"
              fullWidth="true"
              style={{ margin: "20px 0px" }}>
              Shifts
            </Button>
          </RouterLink>
          <RouterLink
            to="/employees"
            style={{ textDecoration: "none", color: "black", width: "100%" }}>
            <Button
              variant="contained"
              color="default"
              fullWidth="true"
              style={{ margin: "20px 0px" }}>
              Employees
            </Button>
          </RouterLink>
        </Toolbar>
      </Container>
    );
  } else {
    return (
      <SwipeableDrawer
        onOpen={() => setDrawerOpen(true)}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}>
        <Toolbar className={classes.btnBox}>
          <RouterLink
            to="/shifts"
            style={{ textDecoration: "none", color: "black", width: "100%" }}>
            <Button
              variant="outlined"
              color="primary"
              fullWidth="true"
              style={{ marginTop: "40vh" }}>
              Shifts
            </Button>
          </RouterLink>
          <RouterLink
            to="/employees"
            style={{ textDecoration: "none", color: "black", width: "100%" }}>
            <Button
              variant="outlined"
              color="primary"
              fullWidth="true"
              style={{ marginTop: "5vh" }}>
              Employees
            </Button>
          </RouterLink>
        </Toolbar>
      </SwipeableDrawer>
    );
  }
};

export default SideNav;
