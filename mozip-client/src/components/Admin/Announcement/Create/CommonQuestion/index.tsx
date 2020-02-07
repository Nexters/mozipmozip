import React, {useState, useEffect} from 'react';
import {useAdmin} from "../../../../../hooks";
import Question from "../Question";
import {Ul, Li} from '../styled';
import styled from "styled-components";
import {NoticeQuestion} from "../../../../../modules/admin";

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
  const { admin } = useAdmin();
  const { questions: { commonQuestions } } = admin;

  const handleMapList = (questions: NoticeQuestion[]) => {
    return questions.map((v,i) => {
      const { title, type, maxLength, questionScore } = v;
      return(
        <Question
          key={i}
          index={i}
          total={total}
          pageType="commonQuestions"
          title={title}
          type={type}
          maxLength={maxLength}
          questionScore={questionScore}/>
      )
    })
  };

  useEffect(()=>{
    setTotal(commonQuestions.map((v: NoticeQuestion) => v.questionScore).reduce((a: number,b: number) => a+b, 0))
  },[commonQuestions.map(v => v.questionScore)]);
  return (
    <Ul>
      {handleMapList(commonQuestions)}
      <Li>
        <QuestionAddButton>질문 추가</QuestionAddButton>
      </Li>
    </Ul>
  );
}

export default CommonQuestion;
