import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Layout } from '../components/common/Admin';
import Main from '../components/users/resumes/main';
import Create from '../components/users/resumes/create';

function Resumes(
  props: RouteComponentProps<{ path: string; subPath: string }>,
) {
  const {
    match: {
      params: { path, subPath },
    },
    history,
  } = props;
  return (
    <Layout>
      {!path ? (
        <Main />
      ) : path === 'create' ? (
        <Create subPath={subPath} history={history} />
      ) : (
        ''
      )}
    </Layout>
  );
}

export default Resumes;
