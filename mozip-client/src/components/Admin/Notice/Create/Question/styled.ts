import styled from 'styled-components';

export const QuestionInput = styled.input`
  width: 100%;
  height: 56px;
  margin-bottom: 14px;
  padding: 0 19px;
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  letter-spacing: -0.05em;
  border: 1px solid #D0D3D8;
  border-radius: 4px;
  color: #46494E;
`;

export const QuestionItemBox = styled.div`
  display: inline-flex;
  align-items: center;
  
  & + & {
    margin-left: 8px;
  }
`;

export const QuestionSelect = styled.select`
  width: 135px;
  height: 42px;
  padding: 0 12px;
  background: url('https://i.imgur.com/y7F9sLF.png') white no-repeat 100px;
  font-weight: bold;
  font-size: 17px;
  line-height: 160%;
  color: #46494E;
  border: 1px solid #D0D3D8;
  box-sizing: border-box;
  border-radius: 4px;
  appearance: none;
`;

export const QsSubInput = styled.input.attrs({
  type: 'number',
})<{ width: string }>`
  width: ${({ width }) => width};
  height: 42px;
  padding: 0 12px;
  margin-right: 10px;
  border: 1px solid #D0D3D8;
  border-radius: 4px;
  font-weight: bold;
  font-size: 17px;
  line-height: 160%;
  
  &::-webkit-outer-spin-button, 
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const QuestionSpan = styled.span`
  font-size: 17px;
  font-weight: bold;
  line-height: 160%;
  color: #262A2F;
`;

export const Total = styled.div`
  margin-top: 16px;
  font-size: 17px;
  line-height: 160%;
  color: #94999E;
`;

export const Title = styled.div`
  width: 90px;
  margin-top: 8px;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: #61CB9F;
`;

export const SubTitle = styled.div`
  display: inline-flex;
  margin-right: 15px;
  font-weight: 500;
  font-size: 17px;
  line-height: 160%;
  color: #61CB9F;
`;

export const SubLayout = styled.section`
  display: flex;
  width: calc(100% - 90px);
`;

export const LeftWrapper = styled.article`
  width: 616px;
  margin-right: 26px;
`;

export const RightWrapper = styled.article`
  width: calc(100% - 616px);
`;