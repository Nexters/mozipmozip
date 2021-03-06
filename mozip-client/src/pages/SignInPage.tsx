import React from 'react';
import Header from '../components/common/Header';
import SignInContainer from '../containers/SignIn/SignInContainer';
import { useBlockIfLogin } from '../hooks';
import { RouteComponentProps } from 'react-router-dom';


function SignInPage(props: RouteComponentProps) {
  const { history } = props;
  useBlockIfLogin();
  const categories = [
    {
      title: '',
    },
  ];

  return (
    <>
      <Header categories={categories} />
      <SignInContainer history={history} />
    </>
  );
}

export default SignInPage;
