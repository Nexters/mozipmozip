import React, {useState, useEffect} from 'react';
import {useAdmin} from "../../../../../hooks";
import Question from "../Question";
import {Ul, Li, AlignCenter, Button} from '../styled';
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
  const {history} = props;
  const [total, setTotal] = useState(0);
  const {admin, onAddQuestion} = useAdmin();
  const {questions: {commonQuestions}} = admin;

  const handleMapList = (questions: NoticeQuestion[]) => {
    return questions.map((v, i) => {
      const {title, type, maxLength, questionScore} = v;
      return (
        <Question
          key={i}
          index={i}
          total={total}
          pageType="commonQuestions"
          title={title}
          type={type}
          maxLength={maxLength}
          questionScore={questionScore}/>
      );
    });
  };

  const handleAddQuestion = () => {
    const lastIndex = commonQuestions.length - 1;
    const lastQuestion = commonQuestions[lastIndex];
    const {title, type, questionScore, maxLength} = lastQuestion;
    if (!title) return alert(`질문${lastIndex + 1} 제목을 입력해 주세요.`);
    if (type === 'long') { // default type is long -> '주관식'
      if (!maxLength) return alert(`질문${lastIndex + 1} 최대 글자수를 입력해 주세요.`);
    };
    if (!questionScore) return alert(`질문${lastIndex + 1} 배점을 입력해 주세요.`);
    else return onAddQuestion('commonQuestions');
  };

  const handleNextPage = () => history.push('/admin/create/group');
  const handleSubmit = () => {
    const {title, description, startDateTime, endDateTime,} = admin;
  };
  useEffect(() => {
    setTotal(commonQuestions.map((v: NoticeQuestion) => v.questionScore).reduce((a: number, b: number) => a + b, 0));
  }, [commonQuestions.map(v => v.questionScore)]);
  return (
    <Ul>
      {handleMapList(commonQuestions)}
      <Li>
        <QuestionAddButton onClick={handleAddQuestion}>질문 추가</QuestionAddButton>
      </Li>
      <AlignCenter>
        <Button padding="17px 24px;">임시 저장</Button>
        <Button padding="17px 91px;" onClick={handleNextPage}>다음</Button>
      </AlignCenter>
    </Ul>
  );
}

export default CommonQuestion;
