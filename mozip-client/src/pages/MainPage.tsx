import React from 'react'
import {Link} from "react-router-dom"

export default function MainPage(){
  return(
    <div>
      <h2>Here is Main Page!</h2>
      <ul>
        <li>
          <Link to={'/admin'}>모집모집 관리자 페이지</Link>
        </li>
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
