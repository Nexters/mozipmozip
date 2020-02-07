import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import {
  MainPage,
  AdminPage,
  NotFoundPage,
  SignUpPage,
  TodoPage, EmployPage} from "./pages"

export default function App() {
  return(
    <Switch>
      <Route exact path={'/'} component={MainPage}/>
      <Route exact path={'/signup'} component={SignUpPage}/>
      <Route path={'/admin/:path?/:subPath?'} component={AdminPage}/>

      <Route path={'/todo'} component={TodoPage}/>
      <Route path={'/employees'} component={EmployPage}/>
      <Redirect path="*" to="/" />
    </Switch>
  )
}
