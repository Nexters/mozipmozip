import React from 'react';
import UserInfo from './userInfo';
import Answers from './answers';
import { useBlockIfNotLogin } from '../../../../hooks';
import Complete from './complete';

type CreateProps = {
  subPath: string;
  history: {
    push: (url: string) => void;
  };
};

function Create(props: CreateProps) {
  const { subPath, history } = props;
  useBlockIfNotLogin();
  return (
    <>
      {subPath === 'userInfo' && <UserInfo history={history} />}
      {subPath === 'answers' && <Answers history={history} />}
      {subPath === 'complete' && <Complete history={history} />}
    </>
  );
}

export default Create;
