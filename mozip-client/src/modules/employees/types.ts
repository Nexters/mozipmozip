import {ActionType} from "typesafe-actions"
import {EMPLOYEE, getEmployees, getEmployeesAPI} from "./actions"
import {createEntityAction, EntityAction} from "../../models"

const actions = {getEmployees}

export const employeeEntity = createEntityAction(EMPLOYEE, getEmployeesAPI); // {ACTION: ~, API: ~}
type EmployeeEntity = EntityAction<typeof employeeEntity>
export type EmployeesAction = ActionType<typeof actions> | EmployeeEntity


export type Employee = {
  id: number
  employee_name: string
  employee_salary: number
  employee_age: number
  profile_image: string
}

export type EmployeesState = {
  status: 'INIT' | 'LOADING' | 'SUCCESS' | 'FAILURE'
  data : Employee[] | []// state type
}
