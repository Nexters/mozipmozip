import styled from 'styled-components';

const Container = styled.article`
  width: 314px;
  margin-bottom: 9px;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  margin-right: 2px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 13px;
  color: #46494e;
`;

const ErrorText = styled.div`
  font-weight: 500;
  font-size: 13px;
  color: #ff6f77;
`;

const InputWrapper = styled.article`
  width: 100%;
  height: 42px;
  padding: 10px;
  border: 1px solid #d0d3d8;
  box-sizing: border-box;
  border-radius: 4px;

  &.focus {
    border: 1px solid #61cb9f;
  }

  &.error {
    border: 1px solid #ff6f77;
  }
`;

const Input = styled.input`
  width: 100%;
  font-weight: 500;
  font-size: 15px;
  color: #262a2f;
`;

const Error = styled.div``;

export { Container, TextWrapper, Title, ErrorText, InputWrapper, Input, Error };
