import styled, { css } from 'styled-components';

const imageCss = css`
  width: 215px;
  height: 114px; // width, height fix?
  background: #FBFBFB;
  border: 1px solid #B5B5B5;
  margin-right: 11px;
`; // common css

export const Title = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 17px;
  width: 115px;
  line-height: 21px;
  display: flex;
  align-items: first;
`;

export const InputText = styled.input`
  width: 65%;
  border: none;
  outline: none;
  border-bottom: 1px solid #424242;
  font-family: Noto Sans KR, sans-serif;
  font-weight: bold;
  font-size: 21px;
  padding-bottom: 7px;
`;

export const ImageLayer = styled.div`
  width: 70%;
  display: flex;
  align-items: flex-end;
`;

export const ImagePreview = styled.img`
  ${imageCss};
  text-align: center;
  line-height: 114px;
`;

export const DefaultImage  = styled.div`
  ${imageCss};
  text-align: center;
  line-height: 114px;
`;

export const NameLayer = styled.div`
  flex: 1;
  & > span{
    display: block;
    font-family: Roboto, Noto Sans Kr, sans-serif;
    font-size: 17px;
    line-height: 20px;
    margin-bottom: 8px;
  }
  & > input{
    font-size: 17px;
    padding-bottom : 8px;
    padding-left: 8px;
    height: 30px; 
    background: #FBFBFB;
    border: 1px solid #B5B5B5;
    width: 100%;
  }
`;


