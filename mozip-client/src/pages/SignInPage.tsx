import React, {useState} from 'react';
import Header from '../components/common/Header';
import SignInContainer from '../containers/SignIn/SignInContainer';
import { useResumes } from '../hooks';
import {RouteComponentProps} from 'react-router-dom';


function SignInPage(props: RouteComponentProps) {
  const { history } = props;

  const { onSaveUserInfo } = useResumes();
  const categories = [
    {
      title: '지원서 작성',
      navigation: [
        {
          title: '디자이너',
          link: '/resumes/create/userInfo',
          onClick: () => onSaveUserInfo('occupation', 'DESIGNER'),
        },
        {
          title: '개발자',
          link: '/resumes/create/userInfo',
          onClick: () => onSaveUserInfo('occupation', 'PROGRAMMER'),
        },
      ],
    },
    {
      title: '내 지원서',
    },
  ];

  return (
    <>
      <Header categories={categories} />
      <SignInContainer history={history}/>
    </>
  );
}

export default SignInPage;
