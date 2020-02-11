import React from 'react';
import InputForm from '../../../components/common/InputForm';

function Manager() {
  const managerInputs = [
    {
      name: 'name',
      title: '이름'
    },
    {
      name: 'email',
      type: 'email',
      title: '이메일'
    },
    {
      name: 'password',
      type: 'password',
      title: '비밀번호'
    },
    {
      name: 'passwordConfirm',
      type: 'password',
      title: '비밀번호 확인'
    },
    {
      name: 'authCode',
      title: '인증 번호'
    }
  ];

  return (
    <>
      {managerInputs.map(({ name, title, type }) => {
        return (
          <InputForm title={title} name={name} type={type} />
        )
      })}
    </>
  )
}

export default Manager;