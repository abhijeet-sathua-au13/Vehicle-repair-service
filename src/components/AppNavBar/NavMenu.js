import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useDispatch, useSelector } from "react-redux";
// import LogoutButton from "../Auththentication/GoogleAuthButton/LogoutButton";

import PATHS from "../../config/webPath";
import { Link, useHistory } from "react-router-dom";
import mechanicAuthActions from "../../redux/actions/mechanicAuthActions/mechanicAuthActions";
import customerAuthActions from "../../redux/actions/customerAuthActions/customerAuthActions";
// import { useState } from "react";





const NavMenu = (props) => {
  const { anchorEl, menuId, isMenuOpen, handleMenuClose } = props;


  const dispatch = useDispatch();

  const history = useHistory()

  const isCustomerLoggedIn = useSelector(state => state.customerLogin)

  const isMechanicLoggedIn = useSelector(state => state.mechanicLogin)


  const onProfileClick = (e) => {
    handleMenuClose(e);
    if(isMechanicLoggedIn && !isCustomerLoggedIn){
      history.push(PATHS.MECHANIC_PROFILE)
    }else if(isCustomerLoggedIn && !isMechanicLoggedIn){
      history.push(PATHS.CUSTOMER_PROFILE)
    }else{
      return
    }
  }

  const onLogout = (e) => {
    handleMenuClose(e);
    console.log(isCustomerLoggedIn)
    if(isMechanicLoggedIn){
      fetch(`${process.env.REACT_APP_API_URL}/api/serviceman-logout`,{
        method: 'GET',
        credentials: 'include',
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        return res.json()
      }).then(resData => {
        dispatch(mechanicAuthActions.mechanicAuthLogout());
        history.push(PATHS.HOME)
        return
      }).catch(err => {
        console.log(err)
        return
      })
    }

    if(isCustomerLoggedIn){
      fetch(`${process.env.REACT_APP_API_URL}/api/customer-logout`,{
        method: 'GET',
        credentials: 'include',
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        return res.json()
      }).then(resData => {
        dispatch(customerAuthActions.customerAuthLogout());
        history.push(PATHS.HOME)
        return
      }).catch(err => {
        console.log(err)
        return
      })
    }
  }

  return (
    <>
    {/* { isCutomerLoggedIn && (
      <LogoutButton 
      isMenuOpen={isMenuOpen} 
      handleMenuClose={handleMenuClose} 
      anchorEl={anchorEl}
      menuId={menuId}
    />
    )} */}
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    > 
      { (isCustomerLoggedIn || isMechanicLoggedIn) && <MenuItem onClick={onProfileClick}>Profile</MenuItem> }
      {(!isCustomerLoggedIn && !isMechanicLoggedIn) && <MenuItem component={Link} to={PATHS.USER_LOGIN} onClick={handleMenuClose}>Login</MenuItem> }
      { (isCustomerLoggedIn || isMechanicLoggedIn) ? (
        <MenuItem onClick={onLogout}>Logout</MenuItem>
      ): null}
    </Menu>
  </>
  );
};

export default NavMenu;
