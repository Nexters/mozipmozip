import React from 'react';

type AnswersProps = {
  history: {
    push: (url: string) => void;
  };
};

const answerList = [
  'NEXTERS에 지원하게 된 계기와 이유는 무엇인가요?',
  '자신의 강점을 포함하여 자유롭게 자기소개해주세요.',
  '협업을 하면서 문제 혹은 갈등에 부딪힌 경험과 해결 과정을 서술해주세요.',
];

function Answers({ history }: AnswersProps) {
  return <>hi</>;
}

export default Answers;
