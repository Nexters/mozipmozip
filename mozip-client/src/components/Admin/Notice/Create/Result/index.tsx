import React, {useEffect} from 'react';
import * as Styled from './style';
import moment from 'moment';
import {useHistory} from 'react-router-dom';
import {useAdmin} from '../../../../../hooks';
import {ButtonWrapper, Li, Title, Ul} from '../styled';
import {NoticeQuestion} from '../../../../../modules/admin';
import Button from '../../../../common/Button';

type ResultProps = {
  onPage: (page: number) => void
}

function Result(props: ResultProps) {
  const {onPage} = props;
  const {admin, onPostNotice, onClearError} = useAdmin();
  const history = useHistory();
  const {
    title, description, documentStartDate, documentEndDate, interviewStartDate, interviewEndDate, noticeEndDate, questions,
    status: {createNoticeStatus}, error: {createNoticeError}
  } = admin;

  const handleQuestion = (questions: NoticeQuestion[]) => {
    return questions.map((v, i) => {
      const {questionScore, maxLength, type, title} = v;
      return (
        <Styled.QuestionWrapper key={i}>
          <Styled.QuestionIndex>질문 {i + 1}</Styled.QuestionIndex>
          <div>
            <Styled.Question>{title}</Styled.Question>
            {type === 'long' ?
              <Styled.QuestionOption>주관식 {maxLength}자 / 배점 {questionScore}%</Styled.QuestionOption>
              :
              <Styled.QuestionOption>파일 업로드 / 배점 {questionScore}%</Styled.QuestionOption>
            }
          </div>
        </Styled.QuestionWrapper>
      );
    });
  };

  const handlePrevPage = () => onPage(4);

  const handleCreateNotice = async () => {
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
              type: v.type === 'long' ? 'LONG' : 'LINK',
            })),
          ],
          occupation: v.toUpperCase(),
        };
      })];
    const submitObj = {
      title,
      description,
      displayImagePath: 'string',
      documentStartDate,
      documentEndDate,
      interviewStartDate,
      interviewEndDate,
      noticeEndDate,
      noticeStatus: 'PUBLISHED', // 여기도 질문
      noticeForms
    };

    // const submitObj = {
    //   title: 'mozipmozip',
    //   description: 'string',
    //   displayImagePath: 'string',
    //   documentStartDate: new Date,
    //   documentEndDate: new Date,
    //   interviewStartDate: new Date,
    //   interviewEndDate: new Date,
    //   noticeEndDate: new Date,
    //   noticeStatus: 'PUBLISHED', // 여기도 질문
    //   noticeForms: [{
    //     jobTypes: ['string'], // 뭐지 jobTypes는?
    //     noticeFormQuestionItems: [{
    //       content: 'string', //뭐지 content?
    //       maxLength: 100,
    //       title: 'string',
    //       questionScore: 0,
    //       type: 'LONG',
    //     }],
    //     occupation: 'COMMON',
    //   }],
    // }; // 임시
    onPostNotice(submitObj); // api request
  };

  const getFormatTime = (date: Date) => {
    return moment(date).format('YYYY.MM.DD');
  };

  useEffect(() => {
    if (createNoticeStatus === 'success') {
      alert('공고가 등록되었습니다.');
      history.push('/admin/notices');
    }
    if (createNoticeError) {
      alert('공고 등록을 실패 하였습니다.');
      onClearError('createNoticeError');
    }
  }, [createNoticeStatus, createNoticeError]);

  return (
    <Ul>
      <Li style={{flexDirection: 'column'}}>
        <Title className='bold' style={{marginBottom: '33px'}}>리쿠르팅 소개</Title>
        <Styled.Title>{title}</Styled.Title>
        <Styled.DateBar>서류 모집 {getFormatTime(documentStartDate)} ~ {getFormatTime(documentEndDate)}</Styled.DateBar>
        <Styled.DateBar>면접 {getFormatTime(interviewStartDate)} ~ {getFormatTime(interviewEndDate)}</Styled.DateBar>
        <Styled.DateBar>최종 발표 {getFormatTime(noticeEndDate)}</Styled.DateBar>
        <Styled.Description>{description}</Styled.Description>
      </Li>
      <Li style={{flexDirection: 'column'}}>
        <Title className='bold' style={{marginBottom: '33px'}}>공통 질문</Title>
        <Styled.QuestionContainer>{handleQuestion(questions['common'])}</Styled.QuestionContainer>
      </Li>
      <Li style={{flexDirection: 'column'}}>
        <Title className='bold' style={{marginBottom: '33px'}}>서류질문 - 개발자</Title>
        <div>{handleQuestion(questions['programmer'])}</div>
      </Li>
      <Li style={{flexDirection: 'column'}}>
        <Title className='bold' style={{marginBottom: '33px'}}>서류질문 - 디자이너</Title>
        <div>{handleQuestion(questions['designer'])}</div>
      </Li>
      <ButtonWrapper>
        <Button text={'임시저장'} width='153px' height='64px' color='#61CB9F'
                border='1px solid #61CB9F' background='#ffffff'/>
        <Button onClick={handlePrevPage} text={'이전'} width='207px' height='64px' background='#262A2F'/>
        <Button onClick={handleCreateNotice} text={'최종 저장'} width='207px' height='64px'/>
      </ButtonWrapper>
    </Ul>
  );
}

export default Result;
