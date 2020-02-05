import styled from 'styled-components';

export const Layout = styled.div`
  width: 76%; // 100% - 24%
  padding: 0 12%;
`;

export const Ul = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  margin-top: 5%;
  margin-bottom: 5vh;
  & > li + li {
   margin-top: 37px;
  }
`;

export const Li = styled.li`
  width: 90%;
  margin-left: 10%;
  display: flex;
`;

export const SubLayer = styled.div`
  width: 70%;
  display: flex;
  align-items: flex-end;
  & > input + input {
    margin-left: 3%;
  }
`;

export const SubTitle = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 17px;
  line-height: 20px;
`;

export const Between = styled.div`
  margin: 0 30px;
`;

type ButtonProps = {
  padding: string;
}

export const Button = styled.button`
  height: 62px;
  padding : ${(props: ButtonProps) => props.padding}
  font-family: Noto Sans KR, sans-serif;
  font-weight: 500;
  font-size: 19px;
  line-height: 28px;
  background: #ECECEC;
  border: 1px solid #AAAAAA;
  box-sizing: border-box;
  cursor: pointer;
`;

export const AlignCenter = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  & > button + button {
    margin-left: 3%;
  }
`
