import React from 'react';
import { useResumes } from '../hooks';
import Header from '../components/common/Header';
import MainContainer from '../containers/Main/MainContainer';

function MainPage() {
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
      <MainContainer />
    </>
  );
}

export default MainPage;
