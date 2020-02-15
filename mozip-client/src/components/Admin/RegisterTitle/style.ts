import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.article`
  font-size: 34px;
  line-height: 50px;
  letter-spacing: -0.05em;
  color: #61CB9F;
`;

const Wrapper = styled.article`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const SubTitle = styled.div`
  font-size: 34px;
  line-height: 50px;
  letter-spacing: -0.05em;
  color: #262A2F;
`;

const ProgressBar = styled.div`
  text-align: center;
`;

const Circle = styled.div`
  border-radius: 50%;
  background: #DCDCDC;
  width: 10px;
  height: 10px;
  display: inline-block;
  z-index: 2;
  
  &.active {
    background: #61CB9F;
  }
`;

const Line = styled.div`
  border-top: 1px solid #F0F1F2;
  width: 80px;
  display: inline-block;
`;

const Half = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  margin-top: 12px;
  width: 90px;
  font-size: 13px;
  letter-spacing: -0.075em;
  display: inline-block;
  color: #94999E;
  
  &.active {
    color: #61CB9F; 
    font-weight: bold;
  }
`;

export {
  Container,
  Title,
  Wrapper,
  SubTitle,
  ProgressBar,
  Circle,
  Line,
  Half,
  Text,
};


