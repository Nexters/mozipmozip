import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 886px;
  margin: 98px auto;
`;

export const Layout = styled.div`
  width: 100%;
  margin-top: 70px;
`;

export const Ul = styled.ul`
  width: 100%;
  list-style: none;
  overflow-y: auto;
  padding: 0;
  margin-top: 5%;
  margin-bottom: 5vh;
  & > li + li {
   margin-top: 49px;
  }
`;

export const Li = styled.li`
  width: 100%;
  display: flex;
  font-family: Roboto, Noto Sans Kr, sans-serif;
`;

export const SubLayer = styled.div`
  width: calc(100% - 115px);
  display: flex;
  flex-direction: column;
  align-items: baseline;
  
  & > input + input {
    margin-left: 3%;
  }
`;

export const Title = styled.div`
  font-size: 17px;
  font-weight: bold;
  width: 115px;
  line-height: 21px;
`;

export const Between = styled.div`
  margin: 0 19px;
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
`;

export const QuestionAddButton = styled.button`
  font-family: Noto Sans KR, Roboto, sans-serif;
  font-weight: 500;
  font-size: 17px;
  line-height: 25px;
  cursor: pointer
`;
