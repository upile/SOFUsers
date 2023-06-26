import { Item } from "../../../shared/models/Item";

export const getStackOverFlowUsers = (stackOverFlowUsersState: any) => {
  return stackOverFlowUsersState &&
    stackOverFlowUsersState.stackOverFlowUsers &&
    stackOverFlowUsersState.stackOverFlowUsers.items
    ? stackOverFlowUsersState.stackOverFlowUsers.items
    : ([] as Item[]);
};
