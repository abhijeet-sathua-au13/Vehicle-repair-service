import { combineReducers } from "redux";
import loader from './loader';
import modal from './modal';
import userAuth from './userAuthReg';
import customerLogin from './customerLogin';
import mechanicLogin from "./mechanicLogin";
import authAlert from "./authAlert";
import mechanicRegister from "./mechanicRegister";
import mechanicAuthAlert from "./mechanicAuthAlert";
import mechanicProfile from "./mechanicProfile";
import customerProfile from "./customerProfile";
import nearByServiceProviders from "./nearByServiceProviders";
import mechanicProfileDetails from "./mechanicProfileDetails";
import serviceDetails from "./serviceDetails";


export default combineReducers({
    loader,
    modal,
    userAuth,
    customerLogin,
    mechanicLogin,
    authAlert,
    mechanicRegister,
    mechanicAuthAlert,
    mechanicProfile,
    customerProfile,
    nearByServiceProviders,
    mechanicProfileDetails,
    serviceDetails
    
});