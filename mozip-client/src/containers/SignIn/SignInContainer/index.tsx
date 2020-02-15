import React, {useState, useEffect} from 'react';
import * as Styled from './style';
import {Link} from 'react-router-dom';
import InputForm from '../../../components/common/InputForm';
import logo from '../../../static/images/logo.png';
import logoTitle from '../../../static/images/logo-title.png';
import {useUsers} from "../../../hooks";

type SignInContainerProps = {
  history: {
    push: (url: string) => void;
  }
}

function SignInContainer(props: SignInContainerProps) {
  const {history} = props;
  const {users, onClearError, onSignIn} = useUsers();
  const {status: {signIn}, error: {signIn: signInError}} = users;
  const [state, setState] = useState({
    email: '',
    password: ''
  });
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
  const handleSubmit = () => onSignIn(state);
  const handleState = (name: string, value: string) => setState({...state, [name]: value});

  useEffect(() => {
    if (signIn === 'success') history.push('/');
  }, [signIn]);

  useEffect(() => {
    if (signInError) {
      alert('이메일 또는 비밀번호가 올바르지 않습니다.');
      onClearError('signIn');
    }
  }, [signInError]);
  return (
    <Styled.Main>
      <Styled.Container>
        <Styled.Logo src={logo}/>
        <Styled.LogoTitle src={logoTitle}/>
        <Styled.Form onSubmit={e => e.preventDefault()}>
          {signInInputs.map(({name, title, type}, i) => {
            return <InputForm title={title} name={name} type={type} key={'signInInput' + i} onState={handleState}/>;
          })}
          <Styled.Button onClick={handleSubmit}>로그인</Styled.Button>
        </Styled.Form>
        <Link to='./signup'>
          <Styled.SignUpButton>회원가입 하기</Styled.SignUpButton>
        </Link>
      </Styled.Container>
    </Styled.Main>
  );
}

export default SignInContainer;
