export const loaderTypes = {
    start: 'loader/START_LOADING',
    stop: 'loader/STOP_LOADING'
}

export const modalTypes = {
    open: 'modal/OPEN_MODAL',
    close: 'modal/CLOSE_MODAL'
}

export const loginPathTypes = {
    googleAccess: "auth/GOOGLE_LOGIN",
    customAccess: "auth/CUSTOM_LOGIN"
}

export const userRegisterTypes = {
    regSuccess: "user/REGISTER_SUCCESS",
    regFailure: "user/REGISTER_FAILURE"
}

export const mechanicRegisterTypes = {
    mechanicRegisterSuccess: "mechanic/REGISTER_SUCCESS",
    mechanicRegisterFailure: "mechanic/REGISTER_FAILURE"
}

export const customerAuthTypes = {
    customerLogin: "customerAuth/LOG_IN",
    customerLogout: "customerAuth/CUSTOMER_LOGOUT"
}

export const mechanicAuthTypes = {
    mechanicLogin: "mechanicAuth/LOG_IN",
    mechanicLogout: "mechanicAuth/LoG_OUT"
}

export const customerAuthStatusTypes = {
    regSuccessMessage: "customer/REG_SUCCESS_MESSAGE",
    regFailureMessage: "customer/REG_FAILURE_MESSAGE",

    loginSuccessMessage: "customer/LOGIN_SUCCESS_MESSAGE",
    loginFailureMessage: "customer/LOGIN_FAILURE_MESSAGE",

    logoutSuccessMessage: "customer/LOGOUT_SUCCESS_MESSAGE",
    logoutFailureMessage: "customer/LOGOUT_FAILURE_MESSAGE",

    clearStatusMessage: "customer/CLEAR_STATUS_MESSAGE"
}

export const mechanicAuthStatusTypes = {
    mechaniRegSuccessAlert: "mechanic/REG_SUCCESS_ALERT",
    mechanicRegFailureAlert: "mechanic/REG_FAILURE_ALERT",

    mechanicLoginSuccessAlert: "mechanic/LOGIN_SUCCESS_ALERT",
    mechanicLoginFailureAlert: "mechanic/LOGIN_FAILURE_ALERT",

    mechanicLogoutSuccessAlert: "mechanic/LOGOUT_SUCCESS_ALERT",
    mechanicLogoutFailureAlert: "mechanic/LOGOUT_FAILURE_ALERT",

    clearMechanicAlertMessage: "mechanic/CLEAR_ALERT"
}

export const mechanicProfileTypes = {
    getMechanicInfo: 'mechanic/GET_PROFILE_INFO',
    removeMechanicProfileInfo: 'mechanic/REMOVE_PROFILE_INFO'
}

export const customerProfileTypes = {
    getCustomerInfo: 'customer/GET_PROFILE_INFO',
    removeCustomerProfileInfo: 'customer/REMOVE_PROFILE_INFO'
}

export const nearbyServiceProvidersListTypes = {
    getServiceProvidersList: 'customer/GET_SERVICE_PROVIDERS',
    removeServiceProvidersList: 'customer/REMOVE_SERVICE_PROVIDERS'
}

export const mechanicProfileDetailsTypes = {
    mechaniProfileDetails: 'mechanic/PROFILE_DETAILS',
    mechanicServicesList: 'mechanic/SERVICES_LIST'
}

export const individualServiceDetailsTypes = {
    getServiceDetails: 'mechanic/SERVICE_DETAILS'
}