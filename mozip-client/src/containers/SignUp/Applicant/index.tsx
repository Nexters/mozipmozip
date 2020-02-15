import React from 'react';
import InputForm from '../../../components/common/InputForm';

type ApplicantProps = {
  onState: (name: string, value: string) => void
}

function Applicant({onState}:  ApplicantProps) {
  const applicantInputs = [
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
  ];

  return (
    <>
      {applicantInputs.map(({ name, title, type }, i) => {
        return (
          <InputForm title={title} name={name} type={type} key={'applicantInput' + i} onState={onState}/>
        )
      })}
    </>
  )
}

export default Applicant;
