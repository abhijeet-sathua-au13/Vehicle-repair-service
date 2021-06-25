import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import AccountCircle from "@material-ui/icons/AccountCircle";

import MoreIcon from "@material-ui/icons/MoreVert";
import MobileIcons from "./MobileIcons";
import NavMenu from "./NavMenu";

import useStyles from "./AppNavBarStyles";
import { Link } from "@material-ui/core";

import logo from '../../assets/images/Group 26331.svg';

// import Search from "../Search/Search";
import { useHistory, useLocation } from "react-router-dom";
import PATHS from "../../config/webPath";

const withoutRoutes = ['/user/login', '/user/signup', '/mechanic/signup', '/mechanic/login']

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const history = useHistory();

  const {pathname} = useLocation();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const goToHome = () => {
    history.push(PATHS.HOME);
  };

  const goToMechanicSection = (e) => {
    e.preventDefault();
    history.push(PATHS.MECHANIC_LOGIN);
  }

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";

  if(withoutRoutes.some((item) => pathname.includes(item))) return null;

  return (
      <div className={classes.grow}>
        <AppBar position="static" className={classes.appBarStyle} elevation={0}>
          <Toolbar>
            <Typography
              onClick={goToHome}
              className={classes.title}
              variant="h6"
            >
            <img src={logo} alt="logo" className={classes.logo} /> 
            </Typography>

            <div className={classes.grow} />
            <div className={classes.sectionLinks}>
              <Typography className={classes.links}>
                  <Link href="#" color="inherit" style={{textDecoration: 'none'}}>
                    Services
                  </Link>
              </Typography >
              <Typography className={classes.links}>
                <Link href="#" color="inherit" style={{textDecoration: 'none'}}>
                  Contact Us
                </Link>
              </Typography>
              <Typography className={classes.links}>
                <Link href="#" color="inherit" onClick={goToMechanicSection} style={{textDecoration: 'none'}}>
                  Repair with Us
                </Link>
              </Typography>
            </div>
              <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <MobileIcons
          mobileMoreAnchorEl={mobileMoreAnchorEl}
          mobileMenuId={mobileMenuId}
          isMobileMenuOpen={isMobileMenuOpen}
          handleMobileMenuClose={handleMobileMenuClose}
          handleProfileMenuOpen={handleProfileMenuOpen}
        />
        <NavMenu
          anchorEl={anchorEl}
          menuId={menuId}
          isMenuOpen={isMenuOpen}
          handleMenuClose={handleMenuClose}
        />
      </div>
  );
}
