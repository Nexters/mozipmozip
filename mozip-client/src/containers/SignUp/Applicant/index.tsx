import React from 'react';
import InputForm from '../../../components/common/InputForm';

function Applicant() {
  return (
    <>
      <InputForm title='이름' />
      <InputForm title='이메일' />
      <InputForm title='비밀번호' />
      <InputForm title='비밀번호 확인' />
    </>
  )
}

export default Applicant;