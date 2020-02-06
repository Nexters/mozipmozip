import React from 'react';
import {useAdmin} from "../../../../../hooks";
import {Title, Li} from "../styled";
import *as Styled from './styled';

type QuestionProps = {
  index: number
  total: number
}

function Question(props: QuestionProps) {
  const { index, total } = props
  const { admin } = useAdmin();
  return (
    <>
      <Li style={{alignItems: 'center'}}>
        <Title>질문 {index}</Title>
        <Styled.QuestionInput/>
      </Li>
      <Li style={{alignItems: 'center'}}>
        <Styled.BoxLine/>
        <Title style={{width: '95px'}}>답변 형식</Title>
        <Styled.QuestionItemBox>
          <label htmlFor={`select${index}`}>
            <Styled.SelectButton/>
          </label>
          <Styled.QuestionSelect id={`select${index}`}>
            <option value="long">주관식</option>
            <option value="short">파일 업로드 또는 링크 입력</option>
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
  index: 1
};

export default Question;


