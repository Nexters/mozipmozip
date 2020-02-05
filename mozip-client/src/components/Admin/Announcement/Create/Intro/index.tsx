import React, {useReducer} from 'react';
import { Ul, Li, SubLayer, SubTitle } from "../styled"; // Create Common Styled Component
import * as Styled from './styled';

type IntroState = {
  imageData: string
}

type Action = {type: 'SET_IMAGE_DATA'}

function reducer(state: IntroState, action: Action){
  switch (action.type) {
    default:
      return state
  }
}

function Intro() {
  const [state, dispatch] = useReducer(reducer, {
    imageData: '' // imagePreview data
  })
  const { imageData } = state
  return (
      <Ul>
        <Li>
          <Styled.Title>제목</Styled.Title>
          <Styled.InputText/>
        </Li>
        <Li>
          <Styled.Title>메인 이미지</Styled.Title>
          <SubLayer>
            {imageData ?
              <Styled.ImagePreview src="" alt=""/>
              :
              <>
                <label htmlFor="intro-file-input">
                  <Styled.DefaultImage>+</Styled.DefaultImage>
                </label>
                <Styled.FileInput/>
              </>}
            <Styled.NameLayer>
              <span>이미지 업로드</span>
              <input type="text" value="" readOnly disabled/>
            </Styled.NameLayer>
          </SubLayer>
        </Li>
        <Li>
          <Styled.Title>설명</Styled.Title>
          <Styled.TextArea/>
        </Li>
        <Li style={{alignItems: 'center'}}>
          <Styled.Title>기간</Styled.Title>
          <SubLayer style={{alignItems: 'center'}}>
            <SubTitle style={{marginRight: '31px'}}>서류 모집</SubTitle>
            <Styled.CalendarInput/>
              &nbsp;&nbsp;-&nbsp;&nbsp;
            <Styled.CalendarInput/>
          </SubLayer>
        </Li>
      </Ul>
  );
}

export default Intro;
