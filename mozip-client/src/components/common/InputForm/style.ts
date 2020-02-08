import styled from 'styled-components';

const Container = styled.section`
  width: 314px;
  margin-bottom: 14px;
`;

const TextWrapper = styled.article`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  margin-right: 2px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 13px;
  color: #46494E
`;

const ErrorText = styled.div`
  font-weight: 500;
  font-size: 13px;
  color: #FF6F77;
`;

const InputWrapper = styled.article`
  padding: 10px;
  width: 100%;
  border: 1px solid #D0D3D8;
  box-sizing: border-box;
  border-radius: 4px;
  
  &.focus {
    border: 1px solid #61CB9F;
  }
  
  &.error {
    border: 1px solid #FF6F77;
  }
`;

const Input = styled.input`
  width: 100%;
  font-weight: 500;
  font-size: 15px;
  color: #262A2F;
`;

const Error = styled.div`

`;

export {
  Container,
  TextWrapper,
  Title,
  ErrorText,
  InputWrapper,
  Input,
  Error,
}