import { mechanicProfileTypes } from "../actionTypes/actionTypes";

const storedMechanicInfo = JSON.parse(localStorage.getItem('mechanicProfileInfo')) || {}

const initialState = {
    mechanicName: "",
    mechanicEmail: "",
    mechanicPhone: "",
    mechanicImage: "",
    ...storedMechanicInfo
}

const mechanicProfile = (state,action) => {
    state = state?.email ? state : initialState;

    switch(action.type){
        case mechanicProfileTypes.getMechanicInfo:
            const mechanicData = {
                mechanicName: action.payload.name,
                mechanicEmail: action.payload.email,
                mechanicPhone: action.payload.phone,
                mechanicImage: action.payload.image ? action.payload.image : ''
            }
            localStorage.setItem('mechanicProfileInfo', JSON.stringify(mechanicData));
            return mechanicData;

        case mechanicProfileTypes.removeMechanicProfileInfo:
            localStorage.removeItem('mechanicProfileInfo');
            return {
                mechanicName: '',
                mechanicEmail: '',
                mechanicPhone: '',
            }
        default:
            return state;

    }
}


export default mechanicProfile;