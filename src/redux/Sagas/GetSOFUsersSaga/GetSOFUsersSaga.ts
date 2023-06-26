import { call, put, takeEvery } from 'redux-saga/effects';

import { getTop20SOFUsers } from '../../../services/apis/GetTop20SOFUsers';
import { GET_TOP20_SOF_USERS, getTop20SOFUsersError, getTop20SOFUsersSuccess } from '../../Actions/GetSOFUsersAction';


export function* getTop20SOFUsersSaga(): any {
    try {
        const result = yield call(getTop20SOFUsers);
        yield put(getTop20SOFUsersSuccess(result));
    } catch (error) {
        yield put(getTop20SOFUsersError(error));
    }
}

export function* actionGetTop20SOFUsersSagaWatcher() {
    yield takeEvery(GET_TOP20_SOF_USERS, getTop20SOFUsersSaga);
}