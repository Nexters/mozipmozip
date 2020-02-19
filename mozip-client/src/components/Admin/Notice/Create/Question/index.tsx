import React from 'react';
import * as Styled from './styled';
import { useAdmin } from '../../../../../hooks';
import { Li } from '../styled';
import { NoticeQuestion } from '../../../../../modules/admin';

type QuestionProps = NoticeQuestion & {
  index: number
  total: number
  pageType: 'common' | 'designer' | 'programmer'
}


function Question(props: QuestionProps) {
  const { index, total, pageType, title, type, maxLength, questionScore } = props;
  const { onSetQuestionValue } = useAdmin();

  const handleQuestionValue = (keyName: string, value: string | number) =>
    onSetQuestionValue({ type: pageType, keyName, index, value });

  const handleNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: keyName, value } = e.target;
    const maxValue = keyName === 'maxLength' ? 1000 : 100;
    if (isNaN(parseInt(value))) onSetQuestionValue({ type: pageType, keyName, index, value: '' });
    else if (parseInt(value) <= maxValue || !value) onSetQuestionValue({
      type: pageType,
      keyName,
      index,
      value: parseInt(value),
    });
    else onSetQuestionValue({ type: pageType, keyName, index, value: maxValue });
  };

  return (
    <Li>
      <Styled.Title>질문 {index + 1}.</Styled.Title>
      <Styled.SubLayout>
        <Styled.LeftWrapper>
          <Styled.QuestionInput
            value={title}
            placeholder="질문을 입력해주세요."
            onChange={e => handleQuestionValue('title', e.target.value)}
          />
          <Styled.QuestionItemBox>
            <Styled.QuestionSelect
              id={`select${index}`}
              onChange={e => handleQuestionValue('type', e.target.value)}>
              <option value="long">주관식</option>
              <option value="file">파일 업로드</option>
              <option value="link">링크 입력</option>
            </Styled.QuestionSelect>
          </Styled.QuestionItemBox>
          {type === 'long' && // 주관식 case
          <Styled.QuestionItemBox>
            <Styled.QsSubInput
              width='96px'
              name="maxLength"
              value={maxLength}
              onChange={handleNumberInput}
            />
            <Styled.QuestionSpan>자</Styled.QuestionSpan>
          </Styled.QuestionItemBox>}
        </Styled.LeftWrapper>
        <Styled.RightWrapper>
          <Styled.QuestionItemBox>
            <Styled.SubTitle>배점</Styled.SubTitle>
            <Styled.QsSubInput
              width='68px'
              name="questionScore"
              value={questionScore}
              onChange={handleNumberInput}
            />
            <Styled.QuestionSpan>%</Styled.QuestionSpan>
          </Styled.QuestionItemBox>
          <Styled.Total>전체 {total.toString()}% / 100%</Styled.Total>
        </Styled.RightWrapper>
      </Styled.SubLayout>
    </Li>
  );
};

Question.defaultProps = {
  index: 0,
};

export default Question;


