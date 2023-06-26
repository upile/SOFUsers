import { ActionModel } from "../../shared/models/ActionModel";
import { StackOverFlowUsers } from "../../shared/models/StackOverFlowUsers";

export const GET_TOP20_SOF_USERS = 'GET_TOP20_SOF_USERS';
export const GET_TOP20_SOF_USERS_SUCCESS = 'GET_TOP20_SOF_USERS_SUCCESS';
export const GET_TOP20_SOF_USERS_ERROR = 'GET_TOP20_SOF_USERS_ERROR';


export const getTop20SOFUsersAction = (): ActionModel => {
    return { type: GET_TOP20_SOF_USERS }
};

export const getTop20SOFUsersSuccess = (result: StackOverFlowUsers): ActionModel => {
    return { type: GET_TOP20_SOF_USERS_SUCCESS, payload: result}
};

export const getTop20SOFUsersError = (result: any): ActionModel => {
    return { type: GET_TOP20_SOF_USERS_ERROR, payload: result}
};