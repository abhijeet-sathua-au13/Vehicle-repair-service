import { mechanicProfileTypes } from "../../actionTypes/actionTypes";


const mechanicProfileActions = {
    getMechanicInfo: (payload) => ({ type: mechanicProfileTypes.getMechanicInfo, payload }),
    removeMechanicInfo: () => ({ type: mechanicProfileTypes.removeMechanicProfileInfo })
}

export default mechanicProfileActions;