import React from 'react';
import UserInfo from './userInfo';
import Answers from './answers';
import {useIsLogin} from "../../../../hooks";

type CreateProps = {
  subPath: string;
  history: {
    push: (url: string) => void;
  };
};

function Create(props: CreateProps) {
  const { subPath, history } = props;
  useIsLogin();
  return (
    <>
      {subPath === 'userInfo' && <UserInfo history={history} />}
      {subPath === 'answers' && <Answers history={history} />}
    </>
  );
}

export default Create;
