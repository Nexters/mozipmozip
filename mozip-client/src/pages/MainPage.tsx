import React from 'react';
import { useResumes, useUsers } from '../hooks';
import Header from '../components/common/Header';
import MainContainer from '../containers/Main/MainContainer';
import {RouteComponentProps} from 'react-router-dom'

function MainPage({history}: RouteComponentProps) {
  const { onSaveUserInfo } = useResumes();
  const { users } = useUsers();
  const { userInfo: { name } } = users;
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
      <Header categories={name ? categories : [ { title: '' } ]}/>
      <MainContainer />
    </>
  );
}

export default MainPage;
