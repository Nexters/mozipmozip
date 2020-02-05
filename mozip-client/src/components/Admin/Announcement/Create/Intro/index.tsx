import React, {useReducer} from 'react';
import { Ul, Li } from "../styled"; // Create Common Styled Component
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
          <Styled.ImageLayer>
            {imageData ?
              <Styled.ImagePreview src="" alt=""/>
              :
              <Styled.DefaultImage>+</Styled.DefaultImage>
            }
            <Styled.NameLayer>
              <span>이미지 업로드</span>
              <input type="text" value="" readOnly disabled/>
            </Styled.NameLayer>
          </Styled.ImageLayer>
        </Li>
      </Ul>
  );
}

export default Intro;
