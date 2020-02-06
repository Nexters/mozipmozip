import React, {useState} from 'react';
import Question from "../Question";
import {Ul, Li} from '../styled';
import styled from "styled-components";

type CommonQuestionProps = {
  history: {
    push: (url: string) => void
  }
}
const QuestionAddButton = styled.button`
  font-family: Noto Sans KR, Roboto, sans-serif;
  font-weight: 500;
  font-size: 17px;
  line-height: 25px;
  cursor: pointer
`;

function CommonQuestion(props: CommonQuestionProps) {
  const [total, setTotal] = useState(0);

  return (
    <Ul>
      <Question total={total} index={1}/>
      <Li>
        <QuestionAddButton>질문 추가</QuestionAddButton>
      </Li>
    </Ul>
  );
}

export default CommonQuestion;
