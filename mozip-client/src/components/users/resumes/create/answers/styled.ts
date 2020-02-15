import styled from 'styled-components';

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BtnGroup = styled.div`
  margin-top: 80px;
  margin-bottom: 118px;
`;

const Button = styled.button`
  width: 261px;
  height: 70px;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  border-radius: 8px;
`;

const SubmitButton = styled(Button)`
  color: #ffffff;
  background: #61cb9f;
`;

const SaveButton = styled(Button)`
  border: 1.5px solid #61cb9f;
  color: #61cb9f;
  margin-right: 22px;
`;

export { Main, BtnGroup, SubmitButton, SaveButton };
