import React from 'react';
import SignUpContainer from '../containers/SignUp/SignUpContainer';
import Header from '../components/common/Header';
import { useResumes } from '../hooks';

function SignUpPage() {
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
      <SignUpContainer />
    </>
  );
}

export default SignUpPage;