import React from 'react';
import * as styled from './styled';
import Banner from '../../../banner';
import { AnswerBox, PortfolioBox } from '../../../answerBox';
import useResumes from '../../../../../hooks/useResumes';

type AnswersProps = {
  history: {
    push: (url: string) => void;
  };
};

const getAnswerBox = (
  question: string,
  questionNo: number,
  maxLength: number,
) => (
  <AnswerBox
    question={question}
    idx={questionNo}
    maxLength={maxLength}
    key={'answer' + questionNo}
  />
);

const getPortfolioBox = (question: string, questionNo: number) => (
  <PortfolioBox
    question={question}
    questionNo={questionNo}
    key={'answer' + questionNo}
  />
);

const categories = [
  {
    questionNo: 1,
    question: 'NEXTERS에 지원하게 된 계기와 이유는 무엇인가요?',
    maxLength: 500,
    child: getAnswerBox,
  },
  {
    questionNo: 2,
    question: '자신의 강점을 포함하여 자유롭게 자기소개해주세요.',
    maxLength: 500,
    child: getAnswerBox,
  },
  {
    questionNo: 3,
    question:
      '협업을 하면서 문제 혹은 갈등에 부딪힌 경험과 해결 과정을 서술해주세요.',
    maxLength: 500,
    child: getAnswerBox,
  },
  {
    questionNo: 4,
    question: '포트폴리오를 제출해주세요.(10MB 이하)',
    maxLength: 500,
    child: getPortfolioBox,
  },
];

function Answers({ history }: AnswersProps) {
  const { resumes, onPostNotice } = useResumes();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onPostNotice(resumes);
  };
  return (
    <styled.Main onSubmit={handleSubmit}>
      <Banner />
      <ul>
        {categories.map(({ question, questionNo, maxLength, child }) => (
          <li>{child && child(question, questionNo, maxLength)}</li>
        ))}
      </ul>
      <styled.BtnGroup>
        <styled.SaveButton>임시저장</styled.SaveButton>
        <styled.SubmitButton>제출하기</styled.SubmitButton>
      </styled.BtnGroup>
    </styled.Main>
  );
}

export default Answers;
