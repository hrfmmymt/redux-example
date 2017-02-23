import { takeEvery } from "redux-saga"
import { put, call } from "redux-saga/effects"
import api from "./api"

import {
  FETCH_REQUESTED,
  fetchSuccessed,
  fetchFailed,
} from "./actions"

function* fetch(action) {
  try {
    const data = yield call(action.payload)
    yield put(fetchSuccessed(data))
  } catch (err) {
    yield put(fetchFailed(err))
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_REQUESTED, fetch)
}