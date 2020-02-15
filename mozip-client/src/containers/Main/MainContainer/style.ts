import styled from 'styled-components';

interface IButtonProps {
  background: string;
}

const Main = styled.main`
  width: 100vw;
  height: calc(100% - 70px);
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BannerImage = styled.img`
  width: 1448px;
  height: 553px;
`;

const ContentWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 74px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

//TODO 버튼 컴포넌트화
const Button = styled.button<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 387px;
  height: 64px;
  margin-right: 40px;
  background: ${({ background }) => background};
  border-radius: 8px;
  font-family: Roboto;
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
`;

const Description = styled.div`
  width: 706px;
  margin-top: 74px;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
`;

export {
  Main,
  Container,
  BannerImage,
  ContentWrapper,
  ButtonWrapper,
  Button,
  Description,
};
