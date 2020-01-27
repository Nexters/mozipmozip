import React, {useEffect} from 'react'
import useEmployees from "../../hooks/Employee/useEmployees"
import { Employee } from "../../modules/employees"

export default function List(){
  const {onGetEmployees, employees} = useEmployees()
  const { data } = employees

  const handleMapToData = (data: Employee[]) => {
    return data.map( (employee: Employee) => {
      const { id, employee_name, employee_salary, employee_age, profile_image} = employee
      return(
        <tr key={id}>
          <td>{id}</td>
          <td>{employee_name}</td>
          <td>{employee_salary}</td>
          <td>{employee_age}</td>
          <td>{profile_image}</td>
        </tr>
      )
    })
  }

  useEffect(()=>{
    onGetEmployees()
  },[])
  return(
    <div>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>salary</td>
            <td>age</td>
            <td>image</td>
          </tr>
        </thead>
        <tbody>
          {
           data.length ?
             handleMapToData(data)
             :
             <tr>
               <td>data doesn't exist</td>
             </tr>
          }
        </tbody>
      </table>
    </div>
  )
}