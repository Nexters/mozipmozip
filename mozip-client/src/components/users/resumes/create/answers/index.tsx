import React from 'react';
import * as styled from './styled';
import Banner from '../../../banner';
import { AnswerBox, PortfolioBox } from '../../../answerBox';

type AnswersProps = {
  history: {
    push: (url: string) => void;
  };
};

const categories = [
  {
    idx: 1,
    question: 'NEXTERS에 지원하게 된 계기와 이유는 무엇인가요?',
    maxLength: 500,
  },
  {
    idx: 2,
    question: '자신의 강점을 포함하여 자유롭게 자기소개해주세요.',
    maxLength: 500,
  },
  {
    idx: 3,
    question:
      '협업을 하면서 문제 혹은 갈등에 부딪힌 경험과 해결 과정을 서술해주세요.',
    maxLength: 500,
  },
];

const answerList = [
  'NEXTERS에 지원하게 된 계기와 이유는 무엇인가요?',
  '자신의 강점을 포함하여 자유롭게 자기소개해주세요.',
  '협업을 하면서 문제 혹은 갈등에 부딪힌 경험과 해결 과정을 서술해주세요.',
];

function Answers({ history }: AnswersProps) {
  return (
    <styled.Main>
      <Banner />
      <ul>
        {categories.map(category => (
          <li>
            <AnswerBox
              question={category.question}
              idx={category.idx}
              maxLength={category.maxLength}
              key={category.idx}
            />
          </li>
        ))}
        <li>
          <PortfolioBox />
        </li>
      </ul>
      <styled.BtnGroup>
        <styled.SaveButton>임시저장</styled.SaveButton>
        <styled.SubmitButton>제출하기</styled.SubmitButton>
      </styled.BtnGroup>
    </styled.Main>
  );
}

export default Answers;
