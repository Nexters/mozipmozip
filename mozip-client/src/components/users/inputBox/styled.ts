import styled from 'styled-components';

export const Main = styled.div`
  font-weight: 500;
  margin-top: 14px;
`;

export const TitleBg = styled.div``;

export const Title = styled.label`
  font-size: 13px;
  line-height: 19px;
  color: #46494e;
`;

export const InputBg = styled.div`
  margin-top: 5px;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  width: 317px;
  height: 42px;
  padding: 10px;
  &.focus {
    border: 1px solid #61cb9f;
  }
  &.error {
    border: 1px solid #ff6f77;
  }
`;

export const Input = styled.input`
  font-size: 15px;
  line-height: 22px;
  color: #262a2f;
  width: 100%;
`;
