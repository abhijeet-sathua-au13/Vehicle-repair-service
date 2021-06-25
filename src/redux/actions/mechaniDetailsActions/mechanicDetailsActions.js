import { mechanicProfileDetailsTypes } from "../../actionTypes/actionTypes";


const mechanicDetailsActions  = {
    mechanicDetails: (payload) => ({ type: mechanicProfileDetailsTypes.mechaniProfileDetails, payload }),
    mechanicServices: (payload) => ({ type: mechanicProfileDetailsTypes.mechanicServicesList, payload })
}

export default mechanicDetailsActions;