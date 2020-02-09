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
    input {
      width: 90%;
      height: 50%;
      border: none;
      font-size: 19px;
      line-height: 28px;
      color: #000000;
    }
  }
  .radio-group-bg {
    display: flex;
    list-style-type: none;
    padding-inline-start: 0;
    margin-top: 0.5rem;
    .radio-bg {
      .radio-custom {
        opacity: 0;
        position: absolute;
        width: 60px;
        height: 40px;
        cursor: pointer;
      }
      .radio-custom-label {
        font-family: Noto Sans KR;
        font-style: normal;
        font-weight: 500;
        font-size: 19px;
        line-height: 28px;
      }
      .radio-custom,
      .radio-custom-label {
        display: inline-block;
        vertical-align: middle;
        margin: 5px;
      }
      .radio-custom + .radio-custom-label:before {
        content: '';
        background: #fff;
        border: 1px solid #c4c4c4;
        border-radius: 6px;
        display: inline-block;
        vertical-align: middle;
        width: 22px;
        height: 22px;
        padding: 2px;
        margin-right: 10px;
        text-align: center;
      }
      .radio-custom:checked + .radio-custom-label:before {
        content: '✔';
        font-family: 'Font Awesome 5 Free';
        background: #6d6d6d;
        color: #ffffff;
      }
    }
    .radio-bg + .radio-bg {
      margin-left: 3rem;
    }
  }
`;