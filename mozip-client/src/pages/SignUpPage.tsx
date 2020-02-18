import React from 'react';
import SignUpContainer from '../containers/SignUp/SignUpContainer';
import Header from '../components/common/Header';
import { useBlockIfLogin } from '../hooks';
import { RouteComponentProps } from 'react-router-dom';

function SignUpPage(props: RouteComponentProps) {
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
      <SignUpContainer history={history} />
    </>
  );
}

export default SignUpPage;
