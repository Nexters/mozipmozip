import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  MainPage,
  AdminPage,
  NotFoundPage,
  SignUpPage,
  SignInPage,
  Resumes,
} from './pages';

export default function App() {
  return (
    <Switch>
      <Route exact path={'/'} component={MainPage} />
      <Route exact path={'/signup'} component={SignUpPage} />
      <Route exact path={'/signin'} component={SignInPage} />
      <Route path={'/admin/:path?/:subPath?'} component={AdminPage} />
      <Route path={'/resumes/:path?/:subPath?'} component={Resumes} />
      <Redirect path="*" to="/" />
    </Switch>
  );
}
