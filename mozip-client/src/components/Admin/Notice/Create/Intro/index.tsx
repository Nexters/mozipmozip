import React, {useState} from 'react';
import CalendarComponent from "../../../../common/Admin/Calendar/Calendar";
import {useAdmin} from "../../../../../hooks";
import moment from "moment";
import {convertToJimpObject, imageResize, getBase64fromJimp} from "../../../../../lib/jimp";
import {Ul, Li, Title, SubLayer, SubTitle, Button, Between, AlignCenter} from "../styled"; // Create CommonQuestion Styled Component
import * as Styled from './styled';
import {makeFormData} from "../../../../../lib/form";
import {hasKey} from "../../../../../modules/admin";


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
    documentStartVisible: false,
    documentEndVisible: false,
    interviewStartVisible: false,
    interviewEndVisible: false,
    noticeEndVisible: false
  });
  const {admin, onSetFormValues} = useAdmin();
  const {documentStartVisible, documentEndVisible, interviewEndVisible, interviewStartVisible, noticeEndVisible} = visible;
  const {title, description, documentStartDate, documentEndDate, interviewStartDate, interviewEndDate, noticeEndDate, image} = admin;
  const {resizeData, name} = image;
  const calendarStyle = {marginLeft: 'none', position: 'absolute', zIndex: '1001', marginTop: '5px'};
  const handleVisible = (name: string) => {
    return hasKey(visible, name) ? setVisible({...visible, [name]: !visible[name]}) : '';
  };

  const handleDate = (name: string, date: any) => { // date type is Moment
    if (name === 'documentStartDate') {
      if (documentEndDate) {
        const endTime = new Date(documentEndDate).getTime();
        const startValue = new Date(date._d).getTime();
        if (endTime < startValue) alert('서류 시작 날짜가 종료 날짜보다 늦어요.');
        else onSetFormValues('documentStartDate', date._d);
      }//validation
      else onSetFormValues('documentStartDate', date._d); // endDate no exist
    } else if (name === 'documentEndDate') {
      if (documentStartDate) {
        const startTime = new Date(documentStartDate).getTime();
        const endValue = new Date(date._d).getTime();
        if (startTime > endValue) alert('서류 종료 날짜가 시작 날짜보다 빨라요.');
        else onSetFormValues('documentEndDate', date._d);
      }//validation
      else onSetFormValues('documentEndDate', date._d); // endDate no exist
    } else if (name === 'interviewStartDate') {
      if (interviewEndDate) {
        const endTime = new Date(interviewEndDate).getTime();
        const startValue = new Date(date._d).getTime();
        if (endTime < startValue) alert('면접 시작 날짜가 종료 날짜보다 늦어요.');
        else onSetFormValues('interviewStartDate', date._d);
      }//validation
      else onSetFormValues('interviewStartDate', date._d); // endDate no exist
    } else if (name === 'interviewEndDate') {
      if (interviewStartDate) {
        const startTime = new Date(interviewStartDate).getTime();
        const endValue = new Date(date._d).getTime();
        if (startTime > endValue) alert('면접 종료 날짜가 시작 날짜보다 빨라요.');
        else onSetFormValues('interviewEndDate', date._d);
      }//validation
      else onSetFormValues('interviewEndDate', date._d); // endDate no exist
    } else {
      if (!documentStartDate) alert('서류 시작 날짜륾 먼저 선택해 주세요.');
      else if (!documentEndDate) alert('서류 종료 날짜륾 먼저 선택해 주세요.');
      else if (!interviewStartDate) alert('면접 시작 날짜를 먼저 선택해 주세요.');
      else if (!interviewEndDate) alert('면접 종료 날짜를 먼저 선택해 주세요.');
      else {
        const noticeEndValue = new Date(date._d).getTime();
        const dEndDate = new Date(documentEndDate).getTime();
        const iEndDate = new Date(interviewEndDate).getTime();
        if (dEndDate > noticeEndValue || iEndDate > noticeEndValue) alert('최종 발표 날짜는 가장 늦어야해~!');
        else onSetFormValues('noticeEndDate', date._d);
      }
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
              .then((base64: string | undefined) => base64 ? onSetFormValues('image', {
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
    else if (!documentStartDate) return alert('서류 시작 날짜를 선택해 주세요.');
    else if (!documentEndDate) return alert('서류 종료 날짜를 선택해 주세요.');
    else if (!interviewStartDate) return alert('면접 시작 날짜를 선택해 주세요.');
    else if (!interviewEndDate) return alert('면접 종료 날짜를 선택해 주세요.');
    else if (!noticeEndDate) return alert('공고 종료 날짜를 선택해 주세요.');
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
        <Li style={{alignItems: 'center'}}>
          <Title>기간</Title>
          <SubLayer style={{alignItems: 'center'}}>
            <SubTitle style={{marginRight: '31px'}}>서류 모집</SubTitle>
            <div>
              <Styled.CalendarInput
                onClick={() => handleVisible('documentStartVisible')}
                value={documentStartDate ? moment(documentStartDate).format('YYYY-MM-DD') : ''}
              />
              {documentStartVisible &&
              <CalendarComponent
                name="documentStartDate"
                style={calendarStyle}
                defaultDate={new Date()}
                onDate={handleDate}
              />}
            </div>
            <Between>~</Between>
            <div>
              <Styled.CalendarInput
                onClick={() => handleVisible('documentEndVisible')}
                value={documentEndDate ? moment(documentEndDate).format('YYYY-MM-DD') : ''}
              />
              {documentEndVisible &&
              <CalendarComponent
                name="documentEndDate"
                style={calendarStyle}
                defaultDate={new Date()}
                onDate={handleDate}
              />}
            </div>
          </SubLayer>
        </Li>
        <Li style={{alignItems: 'center'}}>
          <SubLayer style={{alignItems: 'center'}}>
            <SubTitle style={{marginRight: '31px'}}>면접</SubTitle>
            <div>
              <Styled.CalendarInput
                onClick={() => handleVisible('interviewStartVisible')}
                value={interviewStartDate ? moment(interviewStartDate).format('YYYY-MM-DD') : ''}
              />
              {interviewStartVisible &&
              <CalendarComponent
                name="interviewStartDate"
                style={calendarStyle}
                defaultDate={new Date()}
                onDate={handleDate}
              />}
            </div>
            <Between>~</Between>
            <div>
              <Styled.CalendarInput
                onClick={() => handleVisible('interviewEndVisible')}
                value={interviewEndDate ? moment(interviewEndDate).format('YYYY-MM-DD') : ''}
              />
              {interviewEndVisible &&
              <CalendarComponent
                name="interviewEndDate"
                style={calendarStyle}
                defaultDate={new Date()}
                onDate={handleDate}
              />}
            </div>
          </SubLayer>
        </Li>
        <Li style={{alignItems: 'center'}}>
          <SubLayer style={{alignItems: 'center'}}>
            <SubTitle style={{marginRight: '31px'}}>최종 발표</SubTitle>
            <div>
              <Styled.CalendarInput
                onClick={() => handleVisible('noticeEndVisible')}
                value={noticeEndDate ? moment(noticeEndDate).format('YYYY-MM-DD') : ''}
              />
              {noticeEndVisible &&
              <CalendarComponent
                name="noticeEndDate"
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
