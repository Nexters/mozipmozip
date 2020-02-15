import React from 'react';
import {useAdmin} from "../../../../../hooks";
import {Title, Li} from "../styled";
import *as Styled from './styled';
import {hasKey, NoticeQuestion} from "../../../../../modules/admin";

type QuestionProps = NoticeQuestion & {
  index: number
  total: number
  pageType: 'common' | 'designer' | 'programmer'
}


function Question(props: QuestionProps) {
  const {index, total, pageType, title, type, maxLength, questionScore} = props;
  const { onSetQuestionValue } = useAdmin();

  const handleQuestionValue = (keyName: string, value: string | number) =>
    onSetQuestionValue({ type: pageType, keyName, index, value });

  const handleNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: keyName, value } = e.target;
    const maxValue = keyName === 'maxLength' ? 1000 : 100;
    if(isNaN(parseInt(value))) onSetQuestionValue({ type: pageType, keyName, index, value: ''});
    else if(parseInt(value) <= maxValue || !value) onSetQuestionValue({ type: pageType, keyName, index, value : parseInt(value) });
    else onSetQuestionValue({ type: pageType, keyName, index, value: maxValue });
  };

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
            width={type === 'long' ? '114px;' : '190px;'}
            onChange={e => handleQuestionValue('type', e.target.value)}>
            <option value="long">주관식</option>
            <option value="url">파일 업로드 또는 링크 입력</option>
          </Styled.QuestionSelect>
        </Styled.QuestionItemBox>
        {type === 'long' && // 주관식 case
        <Styled.QuestionItemBox>
          <Styled.QuestionSpan>자</Styled.QuestionSpan>
          <Styled.QsSubInput
            width="83px;"
            name="maxLength"
            value={maxLength}
            onChange={handleNumberInput}
          />
        </Styled.QuestionItemBox>}
      </Li>
      <Li style={{alignItems: 'center'}}>
        <Styled.BoxLine/>
        <Title style={{width: '85px'}}>배점</Title>
        <Styled.QuestionItemBox>
          <Styled.QuestionSpan>%</Styled.QuestionSpan>
          <Styled.QsSubInput
            width="80px;"
            name="questionScore"
            value={questionScore}
            onChange={handleNumberInput}
          />
        </Styled.QuestionItemBox>
        <Styled.Total>{total.toString()}% / 100%</Styled.Total>
      </Li>
    </>
  );
};

Question.defaultProps = {
  index: 0
};

export default Question;


