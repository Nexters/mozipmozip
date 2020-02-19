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
  height: 622px;
  background: #ffffff;
  border: 1px solid #d0d3d8;
  border-radius: 8px;
`;

const LeftWrapper = styled.form`
  width: 425px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 345px;
`;

const TabContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 314px;
  margin-bottom: 22px;
`;

const Tab = styled.article<ITabProps>`
  display: inline-flex;
  margin-right: 8px;
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
  margin-top: 33px;
  width: 317px;
  height: 70px;
  background: #61cb9f;
  border-radius: 8px;
  font-family: Roboto;
  font-size: 20px;
  color: #FFFFFF;
  cursor: pointer;
`;

const RightWrapper = styled.article`
  width: 461px;
`;

export {
  Main,
  Container,
  LeftWrapper,
  InputWrapper,
  TabContainer,
  Tab,
  Button,
  RightWrapper,
};
