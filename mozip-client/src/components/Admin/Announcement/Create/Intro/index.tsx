import React, {useState} from 'react';
import CalendarComponent from "../../../../common/Admin/Calendar/Calendar";
import {Ul, Li, SubLayer, SubTitle, Button, Between, AlignCenter} from "../styled"; // Create Common Styled Component
import * as Styled from './styled';


function Intro() {
  const [state, setState] = useState({
    title: '',
    image: {
      name: '',
      imageData: '' // imagePreview data
    },
    description: '',
    calendarVisible: {
      start: false,
      end: false,
    },
  });
  const {title, image: {name, imageData}, description, calendarVisible: {start, end}} = state;
  const calendarStyle = {marginLeft: 'none', position: 'absolute', zIndex: '1001', marginTop: '5px'};

  return (
    <>
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
                <Styled.FileInput name="description"/>
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
        <Li style={{alignItems: 'center', marginBottom: '350px'}}>
          <Styled.Title>기간</Styled.Title>
          <SubLayer style={{alignItems: 'center'}}>
            <SubTitle style={{marginRight: '31px'}}>서류 모집</SubTitle>
            <div>
              <Styled.CalendarInput/>
              {start && <CalendarComponent
                style={calendarStyle}
                defaultDate={new Date()}
              />}
            </div>
            <Between>~</Between>
            <div>
              <Styled.CalendarInput/>
              {end && <CalendarComponent
                style={calendarStyle}
                defaultDate={new Date()}
              />}
            </div>
          </SubLayer>
        </Li>
        <AlignCenter>
          <Button padding="17px 24px;">임시 저장</Button>
          <Button padding="17px 91px;">다음</Button>
        </AlignCenter>
      </Ul>
    </>
  );
}

export default Intro;
