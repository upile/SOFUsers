import { combineReducers } from 'redux';
import { stackOverflowUsersReducer } from './GetSOFUsersReducer/GetSOFUsersReducer';

const rootReducer = combineReducers({
	stackoverflowusers: stackOverflowUsersReducer
});

export default rootReducer;