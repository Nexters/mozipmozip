import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import {
  MainPage,
  AdminPage,
  NotFoundPage,
  TodoPage, EmployPage} from "./pages"

export default function App() {
  return(
    <Switch>
      <Route exact path={'/'} component={MainPage}/>
      <Route path={'/admin/:path?/:subPath?'} component={AdminPage}/>



      <Route path={'/todo'} component={TodoPage}/>
      <Route path={'/employees'} component={EmployPage}/>
      <Redirect path="*" to="/" />
    </Switch>
  )
}
