import React from 'react';
import * as Styled from './style';
import { Link } from 'react-router-dom';
import InputForm from '../../../components/common/InputForm';
import logo from '../../../static/images/logo.png';
import logoTitle from '../../../static/images/logo-title.png';

function SignUpContainer() {
  const signInInputs = [
    {
      name: 'email',
      type: 'email',
      title: '이메일',
    },
    {
      name: 'password',
      type: 'password',
      title: '비밀번호',
    },
  ];

  return (
    <Styled.Main>
      <Styled.Container>
        <Styled.Logo src={logo} />
        <Styled.LogoTitle src={logoTitle} />
        <Styled.Form>
          {signInInputs.map(({ name, title, type }, i) => {
            return <InputForm title={title} name={name} type={type} key={'signInInput' + i} />;
          })}
          <Styled.Button>로그인</Styled.Button>
        </Styled.Form>
        <Link to='./signup'>
          <Styled.SignUpButton>회원가입 하기</Styled.SignUpButton>
        </Link>
      </Styled.Container>
    </Styled.Main>
  );
}

export default SignUpContainer;
