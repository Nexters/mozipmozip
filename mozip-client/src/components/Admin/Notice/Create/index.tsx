import React, { useEffect } from 'react';
import * as Styled from './styled';
import Intro from './Intro';
import RegisterTitle from '../../RegisterTitle';
import CommonQuestion from './CommonQuestion';
import GroupQuestions from './GroupQuestions';
import Result from './Result';

type CreateProps = {
  subPath: string
  history: {
    push: (url: string) => void
  }
}

function Create(props: CreateProps) {
  const { subPath, history } = props;
  useEffect(() => {
    if (![ 'intro', 'common', 'group', 'result' ].includes(subPath)) history.push('/');
  }, []);

  return (
    <Styled.Container>
      <RegisterTitle subPath={subPath} />
      <Styled.Layout>
        {subPath === 'intro' && <Intro />}
        {subPath === 'common' && <CommonQuestion />}
        {subPath === 'group' && <GroupQuestions />}
        {subPath === 'result' && <Result />}
      </Styled.Layout>
    </Styled.Container>
  );
}

export default Create;
