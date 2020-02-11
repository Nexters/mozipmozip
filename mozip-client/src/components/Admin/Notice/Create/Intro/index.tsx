import React, {useState} from 'react';
import CalendarComponent from "../../../../common/Admin/Calendar/Calendar";
import {useAdmin} from "../../../../../hooks";
import moment from "moment";
import {convertToJimpObject, imageResize, getBase64fromJimp} from "../../../../../lib/jimp";
import {Ul, Li, Title, SubLayer, SubTitle, Button, Between, AlignCenter} from "../styled"; // Create CommonQuestion Styled Component
import * as Styled from './styled';
import {makeFormData} from "../../../../../lib/form";


type IntroProps = {
  history: {
    push: (url: string) => void
  }
}

type Image = {
  // data: string | null | ArrayBuffer
  resizeData: string | null
  fileName: string | null
}

function Intro(props: IntroProps) {
  const {history} = props;
  const [visible, setVisible] = useState({
    startVisible: false,
    endVisible: false,
  });
  const {startVisible, endVisible} = visible;
  const {admin, onSetFormValues} = useAdmin();
  const {title, description, startDateTime, endDateTime, image} = admin;
  const {resizeData, name} = image;
  const calendarStyle = {marginLeft: 'none', position: 'absolute', zIndex: '1001', marginTop: '5px'};
  const handleVisible = (name: string) => name === 'startVisible' ?
    setVisible({startVisible: !startVisible, endVisible: false})
    :
    setVisible({startVisible: false, endVisible: !endVisible}); // calendar visible

  const handleDate = (name: string, date: any) => { // date type is Moment
    if (name === 'startDate') {
      if (endDateTime) {
        const endTime = new Date(endDateTime).getTime();
        const startValue = new Date(date._d).getTime();
        if (endTime < startValue) alert('시작 날짜가 종료 날짜보다 늦어요.');
        else onSetFormValues('startDateTime', date._d);
      }//validation
      else onSetFormValues('startDateTime', date._d); // endDate no exist
    } else { // endDate
      if (startDateTime) {
        const startTime = new Date(startDateTime).getTime();
        const endValue = new Date(date._d).getTime();
        if (startTime > endValue) return alert('종료 날짜가 시작 날짜보다 빨라요.');
        else onSetFormValues('endDateTime', date._d);
      }//validation
      else onSetFormValues('endDateTime', date._d); // endDate no exist
    }
    handleVisible(name); // calendar off
  };

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    const {name, files} = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      const formData = makeFormData({file}); // 파일업로드는 마지막에
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          if (typeof reader.result === 'string') { // reader.result 다른 type 방지..
            const jimpObj = await convertToJimpObject(reader.result);
            await imageResize(jimpObj, 215, 114)
              .then(getBase64fromJimp)
              .then((base64: string | undefined) => base64 ? onSetFormValues('image',{
                formData,
                resizeData: base64,
                name: file.name
              }) : '')
              .catch(console.log);
          }
        } catch (err) {
          throw err;
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNextPage = () => {// next page > preview base64 data must save in store
    if (!title) return alert('제목을 입력해 주세요.');
    else if (!resizeData) return alert('배너 이미지를 선택해 주세요.');
    else if (!description) return alert('리쿠르팅 설명을 입력해 주세요.');
    else if (!startDateTime) return alert('시작 기간을 선택해 주세요.');
    else if (!endDateTime) return alert('종료 기간을 선택해 주세요.');
    else {
      onSetFormValues('image', image);
      history.push('/admin/create/common');
    }
  };

  return (
    <>
      <Ul>
        <Li>
          <Title>제목</Title>
          <Styled.InputText onChange={e => onSetFormValues('title', e.target.value)}/>
        </Li>
        <Li>
          <Title>메인 이미지</Title>
          <SubLayer>
            {resizeData ?
              <Styled.ImagePreview src={resizeData} alt=""/>
              :
              <>
                <label htmlFor="intro-file-input">
                  <Styled.DefaultImage>+</Styled.DefaultImage>
                </label>
                <Styled.FileInput name="description" onChange={handleImage}/>
              </>}
            <Styled.NameLayer>
              <span>이미지 업로드</span>
              <input type="text" readOnly disabled value={name ? name : ''}/>
            </Styled.NameLayer>
          </SubLayer>
        </Li>
        <Li>
          <Title>설명</Title>
          <Styled.TextArea onChange={e => onSetFormValues('description', e.target.value)}/>
        </Li>
        <Li style={{alignItems: 'center', marginBottom: '350px'}}>
          <Title>기간</Title>
          <SubLayer style={{alignItems: 'center'}}>
            <SubTitle style={{marginRight: '31px'}}>서류 모집</SubTitle>
            <div>
              <Styled.CalendarInput
                onClick={() => handleVisible('startVisible')}
                value={startDateTime ? moment(startDateTime).format('YYYY-MM-DD') : ''}
              />
              {startVisible &&
              <CalendarComponent
                name="startDate"
                style={calendarStyle}
                defaultDate={new Date()}
                onDate={handleDate}
              />}
            </div>
            <Between>~</Between>
            <div>
              <Styled.CalendarInput
                onClick={() => handleVisible('endVisible')}
                value={endDateTime ? moment(endDateTime).format('YYYY-MM-DD') : ''}
              />
              {endVisible &&
              <CalendarComponent
                name="endDate"
                style={calendarStyle}
                defaultDate={new Date()}
                onDate={handleDate}
              />}
            </div>
          </SubLayer>
        </Li>
        <AlignCenter>
          <Button padding="17px 24px;">임시 저장</Button>
          <Button padding="17px 91px;" onClick={handleNextPage}>다음</Button>
        </AlignCenter>
      </Ul>
    </>
  );
}

export default Intro;
