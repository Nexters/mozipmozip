import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 116px;
  
  & > button + button {
    margin-left: 17px;
  }
`;
