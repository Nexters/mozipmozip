import React from 'react';
import {useAdmin} from "../../../../../hooks";
import {Title, Li} from "../styled";
import *as Styled from './styled';
import {NoticeQuestion} from "../../../../../modules/admin";

type QuestionProps = NoticeQuestion & {
  index: number
  total: number
  pageType: 'commonQuestions' | 'designerQuestions' | 'developerQuestions'
}


function Question(props: QuestionProps) {
  const {index, total, pageType, title, type, maxLength, questionScore} = props;
  const {admin, onSetQuestionValue} = useAdmin();

  const handleQuestionValue = (keyName: string, value: string | number) =>{}
    // onSetQuestionValue({ pageType, keyName, index, value });


  return (
    <>
      <Li style={{alignItems: 'center'}}>
        <Title>질문 {index+1}</Title>
        <Styled.QuestionInput
          value={title}
          placeholder="질문을 입력해주세요."
          onChange={e => handleQuestionValue('title', e.target.value)}
        />
      </Li>
      <Li style={{alignItems: 'center'}}>
        <Styled.BoxLine/>
        <Title style={{width: '95px'}}>답변 형식</Title>
        <Styled.QuestionItemBox>
          <label htmlFor={`select${index}`}>
            <Styled.SelectButton/>
          </label>
          <Styled.QuestionSelect
            id={`select${index}`}
            onChange={e => handleQuestionValue('answer', e.target.value)}>
            <option value="long">주관식</option>
            <option value="url">파일 업로드 또는 링크 입력</option>
          </Styled.QuestionSelect>
        </Styled.QuestionItemBox>
        {<Styled.QuestionItemBox>
          <Styled.QuestionSpan>자</Styled.QuestionSpan>
          <Styled.QsSubInput width="83px;"/>
        </Styled.QuestionItemBox>}
      </Li>
      <Li style={{alignItems: 'center'}}>
        <Styled.BoxLine/>
        <Title style={{width: '85px'}}>배점</Title>
        <Styled.QuestionItemBox>
          <Styled.QuestionSpan>%</Styled.QuestionSpan>
          <Styled.QsSubInput width="80px;"/>
        </Styled.QuestionItemBox>
        <Styled.Total>{total}% / 100%</Styled.Total>
      </Li>
    </>
  );
};

Question.defaultProps = {
  index: 0
};

export default Question;


