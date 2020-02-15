import React from 'react';
import styled from 'styled-components';

type QuestionProps = {
  text: string;
  idx: number;
};

const QuestionTag = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  color: #46494e;
`;

function Question({ text, idx }: QuestionProps) {
  return (
    <QuestionTag>
      {idx}. {text}
    </QuestionTag>
  );
}

export default Question;
