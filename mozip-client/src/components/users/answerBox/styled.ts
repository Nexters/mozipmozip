import styled from 'styled-components';

const QuestionTag = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  color: #46494e;
`;

const Main = styled.div`
  width: 886px;
  height: 338px;
  margin-top: 101px;
`;

const PortfolioMain = styled.div`
  margin-top: 101px;
  width: 886px;
  height: 106px;
`;

const TextBoxBg = styled.div`
  margin-top: 13px;
  width: 886px;
  height: 246px;
  padding: 20px 22px;
  border: 1px solid #d0d3d8;
  box-sizing: border-box;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 844px;
  height: 206px;
  font-size: 16px;
  line-height: 140%;
  text-align: justify;
  letter-spacing: -0.03em;
  color: #46494e;
  resize: none;
`;

const Limit = styled.div`
  height: 40px;
  font-weight: 500;
  font-size: 17px;
  line-height: 160%;
  color: #6d7176;
  display: flex;
  align-items: center;
  margin-right: 13px;
`;

const Button = styled.button`
  width: 120px;
  height: 40px;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: #262a2f;
  border: 1px solid black;
  border-radius: 4px;
`;

const Footer = styled.div`
  margin-top: 9px;
  display: flex;
  justify-content: flex-end;
`;

const UploadBtnBox = styled.div`
  margin-top: 13px;
  width: 749px;
  height: 42px;
  display: flex;
  justify-content: flex-start;
`;

const UploadBtn = styled.button`
  width: 156px;
  height: 42px;
  border-radius: 4px;
  background-color: #46494e;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  img {
    position: absolute;
    left: 15px;
  }
`;

const UploadFileNameBox = styled.div`
  width: 472px;
  height: 42px;
  margin-left: 12px;
  background: #f7f8f9;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding-left: 14px;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #262a2f;
`;

export {
  QuestionTag,
  Main,
  TextBoxBg,
  TextArea,
  Button,
  Footer,
  Limit,
  UploadBtnBox,
  UploadBtn,
  UploadFileNameBox,
  PortfolioMain,
};
