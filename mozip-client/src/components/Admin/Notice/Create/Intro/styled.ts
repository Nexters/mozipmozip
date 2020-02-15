import styled, { css } from 'styled-components';
import moment from 'moment';

const imageCss = css`
  width: 215px;
  height: 114px; // width, height fix?
  margin-right: 11px;
`; // common css

export const InputText = styled.input`
  width: calc(100% - 115px);
  border-bottom: 1px solid #61CB9F;
  font-weight: bold;
  font-size: 21px;
  padding-bottom: 7px;
`;

export const ImagePreview = styled.img`
  width: 227px;
  height: 136px;
  margin-right: 30px;
`;

export const DefaultImage = styled.div`
  width: 227px;
  height: 136px;
  margin-right: 30px;
  background: #F0F1F2;
`;

export const FileInput = styled.input.attrs({
  type: 'file',
  id: 'intro-file-input',
  accept: 'image/*',
})`
  display: none;
`;

export const FileName = styled.input`
  display: flex;
  align-items: center;
  height: 42px; 
  width: 100%;
  padding: 0 14px;
  background: #F7F8F9;
  border-radius: 4px;
  font-size: 15px;
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
`;

export const TextArea = styled.textarea.attrs({
  maxLength: 500,
})`
  width: calc(100% - 115px);
  height: 290px;
  padding: 23px;
  border: 1px solid #D0D3D8;
  border-radius: 4px;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: -0.075em;
  color: #262A2F;
  resize: none;
`;

export const CalendarInput = styled.input.attrs({
  type: 'text',
  readOnly: true,
  placeholder: moment(new Date).format('YYYY-MM-DD'),
})`
  width: 159px;
  height: 38px;
  font-size: 17px;
  line-height: 20px;
  background: #FFFFFF;
  border: 1px solid #B5B5B5;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
`;

export const SubTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 38px;
  margin-right: 17px;
  background: #EAFAEF;
  border-radius: 4px;
  font-size: 17px;
  color: #262A2F;
`;

export const DateBar = styled.article`
  display: flex;
  align-items: center;
  
  & + & {
    margin-top: 15px;
  }
`;

export const UploadButton = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 156px;
  height: 42px;
  margin-bottom: 8px;
  border-radius: 4px;
  background-color: #46494e;
  color: white;
  cursor: pointer;
  
  img {
    position: absolute;
    left: 15px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 116px;
  
  & > button + button {
    margin-left: 17px;
  }
`;
