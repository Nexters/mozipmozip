import axios from 'axios'
import { createAction } from "typesafe-actions"
import {Employee} from "./types"

export const getEmployeesAPI = async () => await axios.get<Employee[]>('http://dummy.restapiexample.com/api/v1/employees')
// return 타입 지정 빠짐

export const GET_EMPLOYEES = 'GET_EMPLOYEES' as const;
export const EMPLOYEE = {
  REQUEST: 'GET_EMPLOYEE_REQUEST',
  SUCCESS: 'GET_EMPLOYEE_SUCCESS',
  FAILURE: 'GET_EMPLOYEE_FAILURE'
} as const;

export const getEmployees = () => ({type : GET_EMPLOYEES})

