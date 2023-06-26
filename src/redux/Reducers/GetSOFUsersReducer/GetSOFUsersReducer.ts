
import { ActionModel } from "../../../shared/models/ActionModel";
import { StackOverFlowUsers } from "../../../shared/models/StackOverFlowUsers";
import { GET_TOP20_SOF_USERS, GET_TOP20_SOF_USERS_ERROR, GET_TOP20_SOF_USERS_SUCCESS } from "../../Actions/GetSOFUsersAction";


export const initialStackOverFlowUsersState = {
    stackOverFlowUsers: {} as StackOverFlowUsers,
    error: {},
    isLoading: true
};

export const stackOverflowUsersReducer = (
    state: any = initialStackOverFlowUsersState,
    action: ActionModel
) => {
    switch (action.type) {
        case GET_TOP20_SOF_USERS:
            return { ...state, isLoading: true };
        case GET_TOP20_SOF_USERS_SUCCESS:
            return { ...state, stackOverFlowUsers: action.payload, isLoading: false };
        case GET_TOP20_SOF_USERS_ERROR:
            return { ...state, error: action.payload, isLoading: false };
        default:
            return state;
    }
};