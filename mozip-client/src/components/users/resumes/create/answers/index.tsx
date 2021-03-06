import React, { useEffect } from 'react';
import * as styled from './styled';
import Banner from '../../../banner';
import { AnswerBox, PortfolioBox } from '../../../answerBox';
import useResumes from '../../../../../hooks/useResumes';

type AnswersProps = {
  history: {
    push: (url: string) => void;
  };
};

const answerCategories = [
  {
    questionNo: 1,
    question: 'NEXTERS에 지원하게 된 계기와 이유는 무엇인가요?',
    maxLength: 500,
  },
  {
    questionNo: 2,
    question: '자신의 강점을 포함하여 자유롭게 자기소개해주세요.',
    maxLength: 500,
  },
  {
    questionNo: 3,
    question:
      '협업을 하면서 문제 혹은 갈등에 부딪힌 경험과 해결 과정을 서술해주세요.',
    maxLength: 500,
  },
];
const portfolioCategory = {
  questionNo: 4,
  question: '포트폴리오를 제출해주세요.(10MB 이하)',
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    alert('제출되었습니다');
  },
};

function Answers({ history }: AnswersProps) {
  const { resumes, onPostNotice, onSaveUserInfo } = useResumes();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSaveUserInfo('state', 'REGISTRATION');
    onPostNotice(resumes);
  };
  const handleTemporarySave = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    alert('임시저장 되었습니다');
  };
  useEffect(() => {
    if (resumes.status === 'success') history.push('/resumes/create/complete');
    else if (resumes.status === 'fail') alert('제출이 실패했습니다');
  }, [resumes.status, history]);
  return (
    <styled.Main onSubmit={handleSubmit}>
      <Banner />
      <ul>
        {answerCategories.map(({ question, questionNo, maxLength }) => (
          <li key={questionNo}>
            <AnswerBox
              question={question}
              idx={questionNo}
              maxLength={maxLength}
            />
          </li>
        ))}
        <li>
          <PortfolioBox {...portfolioCategory} />
        </li>
      </ul>
      <styled.BtnGroup>
        <styled.SaveButton onClick={handleTemporarySave}>
          임시저장
        </styled.SaveButton>
        <styled.SubmitButton>제출하기</styled.SubmitButton>
      </styled.BtnGroup>
    </styled.Main>
  );
}

export default Answers;
