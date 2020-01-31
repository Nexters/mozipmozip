import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {
  MainPage,
  AdminPage,
  NotFoundPage,
  TodoPage, EmployPage} from "./pages"

export default function App() {
  return(
    <Switch>
      <Route exact path={'/'} component={MainPage}/>
      <Route path={'/Admin'} component={AdminPage}/>
      <Route path={'/todo'} component={TodoPage}/>
      <Route path={'/employees'} component={EmployPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
  )
}
