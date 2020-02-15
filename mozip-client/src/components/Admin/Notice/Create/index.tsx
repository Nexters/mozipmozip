import React, {useEffect} from 'react';
import *as Styled from './styled';
import Intro from "./Intro";
import ProgressBar from "../../../common/Admin/ProgressBar";
import CommonQuestion from "./CommonQuestion";
import GroupQuestions from "./GroupQuestions";
import Result from "./Result/Result";

type CreateProps = {
  subPath: string
  history: {
    push: (url: string) => void
  }
}

function Create(props: CreateProps) {
  const {subPath, history} = props;
  useEffect(() => {
    if (!['intro', 'common', 'group', 'result'].includes(subPath)) history.push('/');
  }, []);

  return (
    <>
      <ProgressBar subPath={subPath}/>
      <Styled.Layout>
        {subPath === 'intro' && <Intro history={history} />}
        {subPath === 'common' && <CommonQuestion history={history} />}
        {subPath === 'group' && <GroupQuestions history={history}/>}
        {subPath === 'result' && <Result history={history}/>}
      </Styled.Layout>
    </>
  );
}

export default Create;
