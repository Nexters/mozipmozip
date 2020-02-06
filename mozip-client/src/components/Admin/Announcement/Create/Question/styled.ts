import styled from 'styled-components';


export const QuestionInput = styled.input`
  width: 65%;
  font-size: 13px;
  letter-spacing: -0.075em;
  padding: 14px 10px;
`;

export const QuestionItemBox = styled.div`
  position: relative;
`;

export const QuestionSelect = styled.select`
  min-width: 124px;
  height: 40px;
  padding: 10px 0px 10px 14px; 
  border-radius: 0px;
  border: 1px solid #B5B5B5;
  box-sizing: border-box;
  background: white;
  font-size: 13px;
  appearance: none; 
  -moz-appearance: none; 
  -ms-appearance: none;
  -webkit-appearance: none;
`;

export const SelectButton = styled.div`
  position: absolute;
  right: 10px;
  top: 15px;
  cursor: pointer;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 10px solid #8B8B8B;
`;

export const BoxLine = styled.div`
  border-left: 1px solid #B5B5B5;
  border-bottom: 1px solid #B5B5B5;
  margin-right: 10px;
  width: 9px;
  height: 9px;
`;


type QsSubInputProps = { width: string }

export const QsSubInput = styled.input`
  margin-left: 10px;
  width: ${(props: QsSubInputProps) => {
  console.log(props);
  return props.width;
}},
  height: 40px;
  padding: 10px 0px 10px 14px;
  box-sizing: border-box;
  border: 1px solid #B5B5B5;
  font-size: 13px;
`;

export const QuestionSpan = styled.span`
  position: absolute;
  right: 10px;
  top: 11px;
  font-size:13px;
  color: #B5B5B5;
`;

export const Total = styled.div`
  margin-left: 30px;
  font-size: 13px;
  opacity: 0.3;
`;
