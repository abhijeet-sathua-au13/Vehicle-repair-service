import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";

import AccountCircle from "@material-ui/icons/AccountCircle";
import { Link } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import PATHS from "../../config/webPath";

const MobileIcons = (props) => {
  const {
    mobileMoreAnchorEl,
    mobileMenuId,
    isMobileMenuOpen,
    handleMobileMenuClose,
    handleProfileMenuOpen,
  } = props;

  const history = useHistory();

  const goToMechanicAuthPage = (e) => {
    e.preventDefault();
    history.push(PATHS.MECHANIC_LOGIN)
  }

  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem>
        <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
          Services
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
          Contact Us
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="#" color="inherit" style={{ textDecoration: "none" }} onClick={goToMechanicAuthPage}>
          Repair with Us
        </Link>
      </MenuItem>
    </Menu>
  );
};

export default MobileIcons;
