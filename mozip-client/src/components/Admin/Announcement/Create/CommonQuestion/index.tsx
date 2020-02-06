import React from 'react';
import Question from "../Question";
import {Ul, Li} from '../styled';

type CommonQuestionProps = {
  history: {
    push: (url: string) => void
  }
}

function CommonQuestion(props: CommonQuestionProps) {
  return (
    <Ul>
      <Question/>
    </Ul>
  );
}

export default CommonQuestion;
