import styled from 'styled-components';

export const InputBox = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  margin-top: 1.5rem;
  .label-bg {
    margin-top: 0.5rem;
    font-size: 17px;
    line-height: 25px;
    color: #6d6d6d;
  }
  .input-bg {
    margin-top: 0.5rem;
    border: 1px solid #d0d0d0;
    box-sizing: border-box;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }
  .radio-group-bg {
    display: flex;
    list-style-type: none;
    padding-inline-start: 0;
    .radio-bg {
      display: flex;
      flex: 1;
      justify-content: flex-start;
      input[type='radio'] {
        width: 22px;
        height: 22px;
      }
    }
  }
  input {
    width: 90%;
    height: 50%;
    border: none;
    font-size: 19px;
    line-height: 28px;
    color: #000000;
  }
`;
