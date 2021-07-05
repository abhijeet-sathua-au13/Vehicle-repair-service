import { customerServiceHistory } from "../../actionTypes/actionTypes";

const customerHistoryActions = {
    getCustomerServicesUsed: (payload) => ({type: customerServiceHistory.getServiceHistory, payload})
}

export default customerHistoryActions;