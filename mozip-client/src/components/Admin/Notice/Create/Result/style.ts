import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: 17px;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  color: #262A2F;
`;

export const DateBar = styled.div`
  font-size: 17px;
  line-height: 157.19%;
  letter-spacing: -0.03em;
  color: #262A2F;
`;

export const Description = styled.div`
  margin-top: 25px;
  margin-bottom: 22px;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.03em;
  word-break: keep-all;
  color: #262A2F;
`;

export const QuestionContainer = styled.section`
  margin-bottom: 22px;
`;

export const QuestionWrapper = styled.article`
  display: flex;
  font-size: 17px;
  line-height: 160%;
  color: #262A2F;

  & + & {
    margin-top: 38px;
  }
`;

export const QuestionIndex = styled.div`
  min-width: 50px;
  margin-right: 40px;
  font-size: 17px;
  line-height: 160%;
  color: #262A2F;
`;

export const Question = styled.div`
  margin-bottom: 11px;
  font-size: 17px;
  line-height: 160%;
  color: #262A2F;
  word-break: keep-all;
`;

export const QuestionOption = styled.div`
  font-size: 17px;
  line-height: 160%;
  color: #94999E;
`;
