/**
 *  Saga watchers listen to actions dispatched from components and take action based on
 *  the particular action dispatched.
 */

import { all } from "redux-saga/effects";
import { actionGetTop20SOFUsersSagaWatcher } from "./GetSOFUsersSaga/GetSOFUsersSaga";
/**
 *  setup all saga watchers
 */
export default function* appWatcherSagas() {
  yield all([actionGetTop20SOFUsersSagaWatcher()]);
}
