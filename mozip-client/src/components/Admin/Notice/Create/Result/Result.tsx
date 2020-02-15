import React, {Fragment} from 'react';
import moment from "moment";
import {useAdmin, useBase} from "../../../../../hooks";
import {Ul, Li, AlignCenter, Button} from "../styled";
import {NoticeObject, NoticeQuestion} from "../../../../../modules/admin";

type ResultProps = {
  history: {
    push: (url: string) => void
  }
}

function Result({history}: ResultProps) {
  const {admin, onPostNotice} = useAdmin();
  const {onFileUpload, base} = useBase();
  const {title, image, description, startDateTime, endDateTime, questions} = admin;

  const handleQuestion = (questions: NoticeQuestion[]) => {
    return questions.map((v, i) => {
      const {questionScore, maxLength, type, title} = v;
      return (
        <div key={i}>
          <p>질문 {i + 1}</p>
          <p>{title}</p>
          {type === 'long' ?
            <p>주관식 {maxLength}자 / 배점 {questionScore}%</p>
            :
            <p>파일 업로드 / 배점 {questionScore}%</p>
          }
        </div>
      );
    });
  };

  const handleEdit = () => history.push('/admin/create/intro');

  const handleCreateNotice = async () => {
    const {formData} = image;
    // await onFileUpload(formData); // url 요청
    const {} = base; // url 을 base에서 가져오기 > API 질문 후 수정
    const displayImagePath = 'string';
    let noticeForms = [
      ...['common', 'programmer', 'designer'].map((v) => {
        const target = questions[v];
        return {
          jobTypes: ['string'], // 뭐지 jobTypes는?
          noticeFormQuestionItems: [
            ...(target as NoticeQuestion[]).map(v => ({
              content: 'string', //뭐지 content?
              maxLength: v.type === 'long' ? v.maxLength : 0,
              title: v.title,
              questionScore: v.questionScore,
              type: v.type === 'long' ? 'LONG' : 'LINK'
            }))
          ],
          occupation: v.toUpperCase()
        };
      })];
    // const submitObj = {
    //   title,
    //   description,
    //   displayImagePath,
    //   startDateTime,
    //   endDateTime,
    //   noticeStatus: 'DRAFT', // 여기도 질문
    //   noticeForms
    // };

    const submitObj = {
      title: 'string',
      description: 'string',
      displayImagePath: 'string',
      startDateTime: new Date(),
      endDateTime: new Date(),
      noticeStatus: 'DRAFT', // 여기도 질문
      noticeForms: [{
        jobTypes: ['string'], // 뭐지 jobTypes는?
        noticeFormQuestionItems: [{
          content: 'string', //뭐지 content?
          maxLength: 100,
          title: 'string',
          questionScore: 0,
          type: 'LONG'
        }],
        occupation: 'COMMON'
      }]
    }; // 임시
    try {
      onPostNotice(submitObj);
      alert('공고가 등록 되었습니다.');
      history.push('/admin');
    } catch (e) {
      alert('공고 등록 실패!');
      console.log(e);
    }
  };
  const handleSubmit = (submitObj: NoticeObject) => {
    onPostNotice(submitObj);
    alert('공고가 등록 되었습니다.');
    history.push('/admin');
  };


  return (
    <Ul>
      <Li>
        <h2>{title}</h2>
        <p>리쿠르트 소개</p>
        <p>서류모집 {moment(startDateTime).format('YYYY.MM.DD')} ~ {moment(endDateTime).format('YYYY.MM.DD')}</p>
        <p>{description}</p>
      </Li>
      <Li>aa
        <p>서류질문 개발자</p>
        <div>{handleQuestion(questions['programmer'])}</div>
      </Li>s
      <Li>s
        <p>서류질문 디자이너</p>
        <div>{handleQuestion(questions['designer'])}</div>
      </Li>
      <AlignCenter>
        <Button padding="17px 24px;" onClick={handleEdit}>수정</Button>
        <Button padding="17px 91px;" onClick={handleCreateNotice}>최종 저장</Button>
      </AlignCenter>
    </Ul>
  );
}

export default Result;
