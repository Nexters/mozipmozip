import { employeeEntity } from "./types"
import {fetchEntity} from "../../models"
import {call, take} from "redux-saga/effects"
import {GET_EMPLOYEES} from "./actions"

const getEmployeesSaga = fetchEntity(employeeEntity);

export default function* getEmployeesWatcher() {
  while (true) {
    yield take(GET_EMPLOYEES)
    yield call(getEmployeesSaga)
  }
}