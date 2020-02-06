import React from 'react';
import {useAdmin} from "../../../../../hooks";
import {Title, Li} from "../styled";
import *as Styled from './styled';

type QuestionProps = {
  index: number
}

function Question(props: QuestionProps) {
  const { recruit } = useAdmin();
  const { index } = props;
  return (
    <>
      <Li style={{alignItems: 'center'}}>
        <Title>질문 {index}</Title>
        <Styled.QuestionInput/>
      </Li>
      <Li style={{alignItems: 'center'}}>
        <Styled.BoxLine/>
        <Title style={{width: '95px'}}>답변 형식</Title>
        <Styled.SelectBox>
          <label htmlFor={`select${index}`}>
            <Styled.SelectButton/>
          </label>
          <Styled.QuestionSelect id={`select${index}`}>
            <option value="long">주관식</option>
            <option value="short">객관식</option>
          </Styled.QuestionSelect>
        </Styled.SelectBox>
       <Styled.SelectBox>
         <Styled.QuestionSpan>자</Styled.QuestionSpan>
         <Styled.QsSubInput width="83px;"/>
       </Styled.SelectBox>
      </Li>
      <Li style={{alignItems: 'center'}}>
        <Styled.BoxLine/>
        <Title style={{width: '85px'}}>배점</Title>
        <Styled.SelectBox>
          <Styled.QuestionSpan>%</Styled.QuestionSpan>
          <Styled.QsSubInput width="80px;"/>
        </Styled.SelectBox>
      </Li>
    </>
  );
};

Question.defaultProps = {
  index: 1
};

export default Question;


