import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import styles from "../../Styles/NavBarStyle.js";

const NavBar = () => {
  const classes = styles();

  return (
    <AppBar className={classes.navBar}>
      <Box className={classes.companyName}>
        <Typography component="h1" variant="h5">
          Cresent
        </Typography>
      </Box>
      <Toolbar>
        <IconButton className={classes.navBtn}>
          <AccountCircleIcon />
        </IconButton>
        <IconButton className={classes.navBtn}>
          <NotificationsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
