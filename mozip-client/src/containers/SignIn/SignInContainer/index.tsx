import React from 'react';
import * as Styled from './style';
import InputForm from '../../../components/common/InputForm';
import logo from '../../../static/images/logo.png'
import logoTitle from '../../../static/images/logo-title.png'

function SignUpContainer() {
  const signInInputs = [
    {
      name: 'email',
      type: 'email',
      title: '이메일'
    },
    {
      name: 'password',
      type: 'password',
      title: '비밀번호'
    }
  ];

  return (
    <Styled.Main>
      <Styled.Container>
        <Styled.Logo src={logo} />
        <Styled.LogoTitle src={logoTitle} />
        <Styled.Form>
          {signInInputs.map(({ name, title, type }) => {
            return (
              <InputForm title={title} />
            )
          })}
          <Styled.Button>로그인</Styled.Button>
        </Styled.Form>
        <Styled.SignUpButton>회원가입</Styled.SignUpButton>
      </Styled.Container>
    </Styled.Main>
  )
}

export default SignUpContainer;