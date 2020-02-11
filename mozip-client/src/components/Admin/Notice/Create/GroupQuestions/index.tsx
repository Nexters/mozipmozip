import React, {useCallback, useEffect, useState} from 'react';
import Question from "../Question";
import {hasKey, NoticeQuestion} from "../../../../../modules/admin";
import {useAdmin} from "../../../../../hooks";
import {AlignCenter, Button, Li, Ul, QuestionAddButton} from "../styled";
import *as Styled from './styled';

type GroupQuestionsProps = {
  history: {
    push: (url: string) => void
  }
}

function GroupQuestions(props: GroupQuestionsProps) {
  const {history} = props;
  const [total, setTotal] = useState({
    programmer: 0,
    designer: 0
  });
  const [pageType, setPageType] = useState<'programmer' | 'designer'>('programmer');
  const {admin: {questions}, onAddQuestion} = useAdmin();
  const {designer, programmer} = questions;

  const handleMapList = useCallback((list: NoticeQuestion[]) => {
    return list.map((v, i) => {
      const {title, type, maxLength, questionScore} = v;
      const _total = questions[pageType].map((v: NoticeQuestion) => v.questionScore).reduce((a: number, b: number) => a + b, 0)
      return (
        <Question
          key={i}
          index={i}
          pageType={pageType}
          total={_total}
          title={title}
          type={type}
          maxLength={maxLength}
          questionScore={questionScore}/>
      );
    });
  }, [questions, pageType]);

  const handleAddQuestion = () => {
    const lastIndex = questions[pageType].length - 1;
    const lastQuestion = questions[pageType][lastIndex];
    const {title, type, questionScore, maxLength} = lastQuestion;
    if (!title) return alert(`질문${lastIndex + 1} 제목을 입력해 주세요.`);
    if (type === 'long') { // default type is long -> '주관식'
      if (!maxLength) return alert(`질문${lastIndex + 1} 최대 글자수를 입력해 주세요.`);
    }
    if (!questionScore) return alert(`질문${lastIndex + 1} 배점을 입력해 주세요.`);
    else return onAddQuestion(pageType);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => e.target.value === 'programmer' ? setPageType('programmer') : setPageType('designer');
  const handleNextPage = () => history.push('/admin/create/result');
  console.log('11',pageType)
  return (
    <Ul>
      <Li>
        <Styled.Select onChange={handleSelect}>
          <option value="programmer">개발자</option>
          <option value="designer">디자이너</option>
        </Styled.Select>
      </Li>
      {handleMapList(questions[pageType])}
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

export default GroupQuestions;
