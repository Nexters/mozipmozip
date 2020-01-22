import React from 'react'
import {Link} from "react-router-dom"

export default function MainPage(){
  return(
    <div>
      <h2>Here is Main Page!</h2>
      <ul>
        <li>
          <Link to={'/todo'}>Go Todo Page</Link>
        </li>
        <li>
          <Link to={'/employees'}>Go Employees Page</Link>
        </li>
      </ul>
    </div>
  )
}