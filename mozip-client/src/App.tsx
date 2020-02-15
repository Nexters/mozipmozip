import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {AdminPage, EmployPage, MainPage, Resumes, SignInPage, SignUpPage, TodoPage,} from './pages';

export default function App() {
    return (
        <Switch>
            <Route exact path={'/'} component={MainPage}/>
            <Route exact path={'/signup'} component={SignUpPage}/>
            <Route exact path={'/signin'} component={SignInPage}/>
            <Route path={'/admin/:path?/:subPath?'} component={AdminPage}/>
            <Route path={'/todo'} component={TodoPage}/>
            <Route path={'/employees'} component={EmployPage}/>
      <Route path={'/resumes/:path?/:subPath?'} component={Resumes} />
      <Redirect path="*" to="/" />
    </Switch>
  );
}
