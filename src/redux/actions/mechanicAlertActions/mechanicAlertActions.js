import { mechanicAuthStatusTypes } from "../../actionTypes/actionTypes";

const mechanicAlertActions = {
    mechanicRegSuccessMsg: (payload) => ({ type: mechanicAuthStatusTypes.mechaniRegSuccessAlert, payload }),
    mechanicRegFailureMsg: (payload) => ({ type: mechanicAuthStatusTypes.mechanicRegFailureAlert, payload }),

    mechanicLoginSuccessMsg: (payload) => ({ type: mechanicAuthStatusTypes.mechanicLoginSuccessAlert, payload }),
    mechanicLoginFailureMsg: (payload) => ({ type: mechanicAuthStatusTypes.mechanicLoginFailureAlert, payload }),

    clearMechanicAlertMessage: () => ({ type: mechanicAuthStatusTypes.clearMechanicAlertMessage })
}

export default mechanicAlertActions;