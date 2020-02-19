import React, { useEffect, useState } from 'react';
import * as Styled from './style';
import Applicant from '../Applicant';
import Manager from '../Manager';
import { useUsers } from '../../../hooks';
import signImage from '../../../static/images/sign-logo.png';

type SignUpContainerProps = {
  history: {
    push: (url: string) => void;
  }
}

function SignUpContainer({ history }: SignUpContainerProps) {
  const [ clickedIndex, setClickedIndex ] = useState(0);
  const [ state, setState ] = useState({
    admin: false,
    adminCode: '',
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
  });
  const { admin, adminCode, email, name, password, passwordConfirm } = state;
  const { onSignUp, users: { status } } = useUsers();

  const handleClickTab = (index: number) => {
    setClickedIndex(index); // tab 바꾸고
    setState({ ...state, admin: !!index });
  };

  const handleState = (name: string, value: string) => setState({ ...state, [name]: value });

  const handleSubmit = () => {
    if (password !== passwordConfirm) return alert('비밀번호와 비밀번호 확인이 다릅니다.');
    else onSignUp({ admin, adminCode, email, name, password });
  };
  const renderTabs = () => {
    const tabTitles = [ '지원자 회원가입', '관리자 회원가입' ];
    return tabTitles.map((title, i) => {
      return (
        <Styled.Tab
          onClick={() => handleClickTab(i)}
          clicked={clickedIndex === i}
          className='bold'
          key={'signUpInput' + i}
        >
          {title}
        </Styled.Tab>
      );
    });
  };
  useEffect(() => {
    if (status['signUp'] === 'success') {
      alert('회원가입 완료');
      history.push('/signIn');
    }
  }, [ status['signUp'] ]);
  return (
    <Styled.Main>
      <Styled.Container>
        <Styled.LeftWrapper onSubmit={(e) => e.preventDefault()}>
          <Styled.TabContainer>
            {renderTabs()}
          </Styled.TabContainer>
          <Styled.InputWrapper>
            {!clickedIndex ? <Applicant onState={handleState} /> : <Manager onState={handleState} />}
          </Styled.InputWrapper>
          <Styled.Button className='bold' onClick={handleSubmit}>회원가입</Styled.Button>
        </Styled.LeftWrapper>
        <Styled.RightWrapper>
          <img src={signImage} />
        </Styled.RightWrapper>
      </Styled.Container>
    </Styled.Main>
  );
}

export default SignUpContainer;
