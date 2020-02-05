import React, {useState} from 'react';
import CalendarComponent from "../../../../common/Admin/Calendar/Calendar";
import {useAdmin} from "../../../../../hooks";
import {Ul, Li, SubLayer, SubTitle, Button, Between, AlignCenter} from "../styled"; // Create Common Styled Component
import * as Styled from './styled';
import moment, {Moment} from "moment";


function Intro() {
  const [visible, setVisible] = useState({
    startVisible: false,
    endVisible: false,
  });
  const {startVisible, endVisible} = visible;
  const {recruit, onSetFormValues} = useAdmin();
  const {startDate, endDate} = recruit;
  const calendarStyle = {marginLeft: 'none', position: 'absolute', zIndex: '1001', marginTop: '5px'};
  const handleVisible = (name: string) => name === 'startVisible' ?
    setVisible({startVisible: !startVisible, endVisible: false})
    :
    setVisible({startVisible: false, endVisible: !endVisible});

  const handleDate = (name:string, date: Moment) => {
    if(name === 'startDate'){

    }//validation
  }

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
            {false ?
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
              <Styled.CalendarInput
                onClick={() => handleVisible('startVisible')}
                value={startDate ? moment(startDate).format('YYYY-MM-DD') : ''}
              />
              {startVisible &&
              <CalendarComponent
                name="startDate"
                style={calendarStyle}
                defaultDate={new Date()}
                onSetFormValues={onSetFormValues}
              />}
            </div>
            <Between>~</Between>
            <div>
              <Styled.CalendarInput
                onClick={() => handleVisible('endVisible')}
                value={endDate ? moment(endDate).format('YYYY-MM-DD') : ''}
              />
              {endVisible &&
              <CalendarComponent
                name="endDate"
                style={calendarStyle}
                defaultDate={new Date()}
                onSetFormValues={onSetFormValues}
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
