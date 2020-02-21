import React, { useState } from 'react';
import * as Styled from './styled';
import moment from 'moment';

import Button from '../../../../common/Button';
import CalendarComponent from '../../../../common/Admin/Calendar/Calendar';
import { useAdmin } from '../../../../../hooks';
import { convertToJimpObject, getBase64fromJimp, imageResize } from '../../../../../lib/jimp';
import { ButtonWrapper, Li, SubLayer, Ul } from '../styled'; // Create CommonQuestion Styled Component
import { makeFormData } from '../../../../../lib/form';
import { hasKey } from '../../../../../modules/admin';
import uploadImg from '../../../../../static/images/uploadImg.png';
import cats from '../../../../../static/images/cats.jpeg';

type IntroProps = {
  onPage: (page: number) => void
}
function Intro(props: IntroProps) {
  const { onPage } = props;
  const [ visible, setVisible ] = useState({
    documentStartVisible: false,
    documentEndVisible: false,
    interviewStartVisible: false,
    interviewEndVisible: false,
    noticeEndVisible: false,
  });
  const { admin, onSetFormValues } = useAdmin();
  const { documentStartVisible, documentEndVisible, interviewEndVisible, interviewStartVisible, noticeEndVisible } = visible;
  const { title, description, documentStartDate, documentEndDate, interviewStartDate, interviewEndDate, noticeEndDate, image } = admin;
  const { resizeData, name } = image;
  const calendarStyle = { marginLeft: 'none', position: 'absolute', zIndex: '1001', marginTop: '5px' };
  const handleVisible = (name: string) => {
    return hasKey(visible, name) ? setVisible({ ...visible, [name]: !visible[name] }) : '';
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
      handleVisible('documentStartVisible'); // calendar off
    } else if (name === 'documentEndDate') {
      if (documentStartDate) {
        const startTime = new Date(documentStartDate).getTime();
        const endValue = new Date(date._d).getTime();
        if (startTime > endValue) alert('서류 종료 날짜가 시작 날짜보다 빨라요.');
        else onSetFormValues('documentEndDate', date._d);
      }//validation
      else onSetFormValues('documentEndDate', date._d); // endDate no exist
      handleVisible('documentEndVisible'); // calendar off
    } else if (name === 'interviewStartDate') {
      if (interviewEndDate) {
        const endTime = new Date(interviewEndDate).getTime();
        const startValue = new Date(date._d).getTime();
        if (endTime < startValue) alert('면접 시작 날짜가 종료 날짜보다 늦어요.');
        else onSetFormValues('interviewStartDate', date._d);
      }//validation
      else onSetFormValues('interviewStartDate', date._d); // endDate no exist
      handleVisible('interviewStartVisible'); // calendar off
    } else if (name === 'interviewEndDate') {
      if (interviewStartDate) {
        const startTime = new Date(interviewStartDate).getTime();
        const endValue = new Date(date._d).getTime();
        if (startTime > endValue) alert('면접 종료 날짜가 시작 날짜보다 빨라요.');
        else onSetFormValues('interviewEndDate', date._d);
      }//validation
      else onSetFormValues('interviewEndDate', date._d); // endDate no exist
      handleVisible('interviewEndVisible'); // calendar off
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
        handleVisible('noticeEndVisible'); // calendar off
      }
    }
  };

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    const { name, files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      const formData = makeFormData({ file }); // 파일업로드는 마지막에
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
                name: file.name,
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
    // else if (!resizeData) return alert('배너 이미지를 선택해 주세요.');
    else if (!description) return alert('리쿠르팅 설명을 입력해 주세요.');
    else if (!documentStartDate) return alert('서류 시작 날짜를 선택해 주세요.');
    else if (!documentEndDate) return alert('서류 종료 날짜를 선택해 주세요.');
    else if (!interviewStartDate) return alert('면접 시작 날짜를 선택해 주세요.');
    else if (!interviewEndDate) return alert('면접 종료 날짜를 선택해 주세요.');
    else if (!noticeEndDate) return alert('공고 종료 날짜를 선택해 주세요.');
    else {
      onSetFormValues('image', image);
      onPage(2)
    }
  };

  return (
    <Ul>
      <Li>
        <Styled.Title>공고 제목</Styled.Title>
        <Styled.InputText
          value={title}
          onChange={e => onSetFormValues('title', e.target.value)} />
      </Li>
      <Li>
        <Styled.Title>메인 이미지</Styled.Title>
        <SubLayer style={{
          flexDirection: 'inherit',
          alignItems: 'flex-end',
        }}>
          {resizeData ?
            <Styled.ImagePreview src={resizeData} alt="" />
            :
            <>
              <Styled.DefaultImage src={cats} alt=""/>
              <Styled.FileInput name="description" onChange={handleImage} />
            </>}
          <Styled.NameLayer>
            <Styled.UploadButton htmlFor="intro-file-input">
              <img src={uploadImg} alt="" /> 업로드 하기
            </Styled.UploadButton>
            <Styled.FileName readOnly disabled value={name ? name : '야옹이.png'} />
          </Styled.NameLayer>
        </SubLayer>
      </Li>
      <Li>
        <Styled.Title>공고 설명</Styled.Title>
        <Styled.TextArea
          value={description}
          onChange={e => onSetFormValues('description', e.target.value)} />
      </Li>
      <Li>
        <Styled.Title>모집 기간</Styled.Title>
        <SubLayer>
          <Styled.DateBar>
            <Styled.SubTitle>서류 모집</Styled.SubTitle>
            <div>
              <Styled.CalendarInput
                onClick={() => handleVisible('documentStartVisible')}
                value={documentStartDate ? moment(documentStartDate).format('YYYY-MM-DD') : ''}
              />
              {documentStartVisible &&
              <CalendarComponent
                name="documentStartDate"
                style={calendarStyle}
                // defaultDate={new Date()}
                onDate={handleDate}
              />}
            </div>
            <Styled.Between>~</Styled.Between>
            <div>
              <Styled.CalendarInput
                onClick={() => handleVisible('documentEndVisible')}
                value={documentEndDate ? moment(documentEndDate).format('YYYY-MM-DD') : ''}
              />
              {documentEndVisible &&
              <CalendarComponent
                name="documentEndDate"
                style={calendarStyle}
                // defaultDate={new Date()}
                onDate={handleDate}
              />}
            </div>
          </Styled.DateBar>
          <Styled.DateBar>
            <Styled.SubTitle>면접</Styled.SubTitle>
            <div>
              <Styled.CalendarInput
                onClick={() => handleVisible('interviewStartVisible')}
                value={interviewStartDate ? moment(interviewStartDate).format('YYYY-MM-DD') : ''}
              />
              {interviewStartVisible &&
              <CalendarComponent
                name="interviewStartDate"
                style={calendarStyle}
                // defaultDate={new Date()}
                onDate={handleDate}
              />}
            </div>
            <Styled.Between>~</Styled.Between>
            <div>
              <Styled.CalendarInput
                onClick={() => handleVisible('interviewEndVisible')}
                value={interviewEndDate ? moment(interviewEndDate).format('YYYY-MM-DD') : ''}
              />
              {interviewEndVisible &&
              <CalendarComponent
                name="interviewEndDate"
                style={calendarStyle}
                // defaultDate={new Date()}
                onDate={handleDate}
              />}
            </div>
          </Styled.DateBar>
          <Styled.DateBar>
            <Styled.SubTitle>최종 발표</Styled.SubTitle>
            <div>
              <Styled.CalendarInput
                onClick={() => handleVisible('noticeEndVisible')}
                value={noticeEndDate ? moment(noticeEndDate).format('YYYY-MM-DD') : ''}
              />
              {noticeEndVisible &&
              <CalendarComponent
                name="noticeEndDate"
                style={calendarStyle}
                // defaultDate={new Date()}
                onDate={handleDate}
              />}
            </div>
          </Styled.DateBar>
        </SubLayer>
      </Li>
      <ButtonWrapper>
        <Button text={'임시저장'} width='153px' height='64px' color='#61CB9F'
                border='1px solid #61CB9F' background='#ffffff' />
        <Button onClick={handleNextPage} text={'다음'} width='207px' height='64px' />
      </ButtonWrapper>
    </Ul>
  );
}

export default Intro;
