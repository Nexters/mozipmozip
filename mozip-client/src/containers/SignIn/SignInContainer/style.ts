import styled from 'styled-components';

const Main = styled.main`
  width: 100vw;
  height: calc(100% - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F7F8F9;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 428px;
  background: #FFFFFF;
  border: 1px solid #D0D3D8;
  border-radius: 8px;
  padding: 58px 56px 57px 55px;
`;

const Form = styled.form`

`;

const Logo = styled.img`
  width: 62px;
  height: 59px;
`;

const LogoTitle = styled.img`
  margin-top: 15px;
  margin-bottom: 40px;
  width: 105px;
  height: 25px;
`;

//TODO 버튼 컴포넌트화
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: 317px;
  height: 64px;
  background: #61CB9F;
  border-radius: 8px;
  font-family: Roboto;
  font-size: 20px;
  color: #FFFFFF;
  cursor: pointer;
`;

const SignUpButton = styled.div`
  height: 34px;
  margin-top: 15px;
  line-height: 34px;
  cursor: pointer;
`;

export {
  Main,
  Container,
  Form,
  Logo,
  LogoTitle,
  Button,
  SignUpButton,
}
