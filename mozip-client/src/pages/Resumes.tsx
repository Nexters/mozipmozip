import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from '../components/common/Header';
import Main from '../components/users/resumes/main';
import Create from '../components/users/resumes/create';
import { useResumes } from '../hooks';

function Resumes(
  props: RouteComponentProps<{ path: string; subPath: string }>,
) {
  const {
    match: {
      params: { path, subPath },
    },
    history,
  } = props;
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
      {!path ? (
        <Main />
      ) : path === 'create' ? (
        <Create subPath={subPath} history={history} />
      ) : (
        ''
      )}
    </>
  );
}

export default Resumes;
