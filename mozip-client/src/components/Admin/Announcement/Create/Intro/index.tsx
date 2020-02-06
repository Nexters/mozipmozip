import React, {useState} from 'react';
import CalendarComponent from "../../../../common/Admin/Calendar/Calendar";
import {useAdmin} from "../../../../../hooks";
import moment from "moment";
import {convertToJimpObject, imageResize, getBase64fromJimp} from "../../../../../lib/jimp";
import {Ul, Li, Title, SubLayer, SubTitle, Button, Between, AlignCenter} from "../styled"; // Create CommonQuestion Styled Component
import * as Styled from './styled';


type IntroProps = {
  history: {
    push: (url: string) => void
  }
}

type Image = {
  data: string | null | ArrayBuffer
  resizeData: string | null
  fileName: string | null
}

function Intro(props: IntroProps) {
  const {history} = props;
  const [visible, setVisible] = useState({
    startVisible: false,
    endVisible: false,
  });
  const [image, setImage] = useState<Image>({
    data: '', //original base64
    resizeData: '',//resize base64
    fileName: ''
  });
  const {startVisible, endVisible} = visible;
  const {data, resizeData, fileName} = image;
  const {admin, onSetFormValues} = useAdmin();
  const {title, description, startDate, endDate} = admin;
  const calendarStyle = {marginLeft: 'none', position: 'absolute', zIndex: '1001', marginTop: '5px'};
  const handleVisible = (name: string) => name === 'startVisible' ?
    setVisible({startVisible: !startVisible, endVisible: false})
    :
    setVisible({startVisible: false, endVisible: !endVisible}); // calendar visible

  const handleDate = (name: string, date: any) => { // date type is Moment
    if (name === 'startDate') {
      if (endDate) {
        const endTime = new Date(endDate).getTime();
        const startValue = new Date(date._d).getTime();
        if (endTime < startValue) alert('시작 날짜가 종료 날짜보다 늦어요.');
        else onSetFormValues('startDate', date._d);
      }//validation
      else onSetFormValues('startDate', date._d); // endDate no exist
    } else { // endDate
      if (startDate) {
        const startTime = new Date(startDate).getTime();
        const endValue = new Date(date._d).getTime();
        if (startTime > endValue) return alert('종료 날짜가 시작 날짜보다 빨라요.');
        else onSetFormValues('endDate', date._d);
      }//validation
      else onSetFormValues('endDate', date._d); // endDate no exist
    }
    handleVisible(name); // calendar off
  };

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    const {name, files} = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          if (typeof reader.result === 'string') { // reader.result 다른 type 방지..
            const jimpObj = await convertToJimpObject(reader.result);
            await imageResize(jimpObj, 215, 114)
              .then(getBase64fromJimp)
              .then((base64: string | undefined) => base64 ? setImage({
                data: reader.result,
                resizeData: base64,
                fileName: file.name
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
    else if (!data) return alert('배너 이미지를 선택해 주세요.');
    else if (!description) return alert('리쿠르팅 설명을 입력해 주세요.');
    else if (!startDate) return alert('시작 기간을 선택해 주세요.');
    else if (!endDate) return alert('종료 기간을 선택해 주세요.');
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
              <input type="text" readOnly disabled value={fileName ? fileName : ''}/>
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
                value={startDate ? moment(startDate).format('YYYY-MM-DD') : ''}
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
                value={endDate ? moment(endDate).format('YYYY-MM-DD') : ''}
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
