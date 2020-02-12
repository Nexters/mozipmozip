import React, { useState } from 'react';
import * as Styled from './style';
import Applicant from '../Applicant';
import Manager from '../Manager';

function SignUpContainer() {
  const [clickedIndex, setClickedIndex] = useState(0);
  const handleClickTab = (index: number) => setClickedIndex(index);

  const renderTabs = () => {
    const tabTitles = ['지원자 회원가입', '관리자 회원가입'];
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
      )
    })
  };

  return (
    <Styled.Main>
      <Styled.Container>
        <Styled.LeftWrapper>
          <Styled.TabContainer>
            {renderTabs()}
          </Styled.TabContainer>
          { !clickedIndex ? <Applicant /> : <Manager />}
          <Styled.Button className='bold'>회원가입</Styled.Button>
        </Styled.LeftWrapper>
        <Styled.RightWrapper>
          <Styled.Circle />
        </Styled.RightWrapper>
      </Styled.Container>
    </Styled.Main>
  )
}

export default SignUpContainer;