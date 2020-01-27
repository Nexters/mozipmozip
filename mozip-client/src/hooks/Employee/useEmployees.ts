import { useCallback } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getEmployees} from "../../modules/employees"
import {RootState} from "../../modules"

export default function useEmployees(){
  const dispatch = useDispatch()
  const onGetEmployees = useCallback(()=>dispatch(getEmployees()),[dispatch])
  const employees = useSelector( (state: RootState) => state.employees)
  return {
    employees,
    onGetEmployees
  }
}