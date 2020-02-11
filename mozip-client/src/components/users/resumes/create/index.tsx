import React from 'react';
import UserInfo from './userInfo';

type CreateProps = {
  subPath: string;
  history: {
    push: (url: string) => void;
  };
};

function Create(props: CreateProps) {
  const { subPath, history } = props;
  return <>{subPath === 'userInfo' && <UserInfo />}</>;
}

export default Create;
