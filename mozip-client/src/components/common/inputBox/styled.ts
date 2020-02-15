import styled from 'styled-components';

export const InputBox = styled.div`
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
  .checkbox-group-bg {
    display: flex;
    list-style-type: none;
    padding-inline-start: 0;
    margin-top: 0.5rem;
    .checkbox-bg {
      .checkbox-custom {
        opacity: 0;
        position: absolute;
        width: 60px;
        height: 40px;
        cursor: pointer;
      }
      .checkbox-custom-label {
        font-family: Noto Sans KR;
        font-style: normal;
        font-weight: 500;
        font-size: 19px;
        line-height: 28px;
      }
      .checkbox-custom,
      .checkbox-custom-label {
        display: inline-block;
        vertical-align: middle;
        margin: 5px;
      }
      .checkbox-custom + .checkbox-custom-label:before {
        content: '';
        background: #fff;
        border: 1.5px solid #d0d3d8;
        border-radius: 6px;
        display: inline-block;
        vertical-align: middle;
        width: 22px;
        height: 22px;
        padding: 2px;
        margin-right: 10px;
        text-align: center;
      }
      .checkbox-custom:checked + .checkbox-custom-label:before {
        content: '✔';
        font-family: 'Font Awesome 5 Free';
        background: #61cb9f;
        color: white;
      }
    }
    .checkbox-bg + .checkbox-bg {
      margin-left: 3rem;
    }
  }
`;

export const Main = styled.div`
  font-weight: 500;
  margin-top: 14px;
`;

export const LabelBg = styled.div`
  margin-bottom: 5px;
  font-size: 13px;
  line-height: 19px;
  color: #46494e;
`;
