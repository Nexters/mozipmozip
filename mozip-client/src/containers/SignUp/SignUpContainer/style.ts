import styled from 'styled-components';

interface ITabProps {
  clicked: boolean;
}

const Main = styled.main`
  width: 100vw;
  height: calc(100% - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f7f8f9;
`;

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  width: 886px;
  background: #ffffff;
  border: 1px solid #d0d3d8;
  border-radius: 8px;
  padding: 52px 58px 64px 54px;
`;

const LeftWrapper = styled.article``;

const TabContainer = styled.section`
  margin-bottom: 48px;
`;

const Tab = styled.article<ITabProps>`
  margin-right: 40px;
  display: inline-flex;
  padding-bottom: 7px;
  font-size: 20px;
  line-height: 30px;
  color: ${({ clicked }) => (clicked ? '#61CB9F' : '#6D7176')};
  border-bottom: ${({ clicked }) => clicked && '2px solid #61CB9F'};
  cursor: pointer;
`;

//TODO 버튼 컴포넌트화
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 47px;
  width: 317px;
  height: 70px;
  background: #61cb9f;
  border-radius: 8px;
  font-family: Roboto;
  font-size: 20px;
  color: #ffffff;
`;

const RightWrapper = styled.article`
  display: flex;
  align-items: center;
`;

//TODO 이미지로 변경
const Circle = styled.div`
  width: 339px;
  height: 339px;
  background: #f4f4f4;
  border-radius: 50%;
`;

export {
  Main,
  Container,
  LeftWrapper,
  TabContainer,
  Tab,
  Button,
  RightWrapper,
  Circle,
};
