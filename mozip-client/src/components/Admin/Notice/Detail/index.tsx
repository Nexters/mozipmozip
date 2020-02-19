import React from 'react';
import {Li, Title, Ul} from "../Create/styled";
import * as ResultStyled from "../Create/Result/style";
import * as CreateStyled from '../Create/styled';
import * as Styled from './styled'
import moment from "moment";
import {useAdmin} from "../../../../hooks";
import {useHistory} from "react-router-dom";
import {NoticeQuestion} from "../../../../modules/admin";

function Detail() {
  const {admin, onPostNotice, onClearError} = useAdmin();
  const history = useHistory();
  const {
    title, description, documentStartDate, documentEndDate, interviewStartDate, interviewEndDate, noticeEndDate, questions,
    status: {createNoticeStatus}, error: {createNoticeError}
  } = admin;
  const getFormatTime = (date: Date) => {
    return moment(date).format('YYYY.MM.DD');
  };
  const handleQuestion = (questions: NoticeQuestion[]) => {
    return questions.map((v, i) => {
      const {questionScore, maxLength, type, title} = v;
      return (
        <ResultStyled.QuestionWrapper key={i}>
          <ResultStyled.QuestionIndex>질문 {i + 1}</ResultStyled.QuestionIndex>
          <div>
            <ResultStyled.Question>{title}</ResultStyled.Question>
            {type === 'long' ?
              <ResultStyled.QuestionOption>주관식 {maxLength}자 / 배점 {questionScore}%</ResultStyled.QuestionOption>
              :
              <ResultStyled.QuestionOption>파일 업로드 / 배점 {questionScore}%</ResultStyled.QuestionOption>
            }
          </div>
        </ResultStyled.QuestionWrapper>
      );
    });
  };
  return (
    <CreateStyled.Container>
      <Styled.Title>{title}</Styled.Title>
      <Ul>
        <Li style={{flexDirection: 'column'}}>
          <Title className='bold' style={{marginBottom: '33px'}}>리쿠르팅 소개</Title>
          <ResultStyled.DateBar>서류
            모집 {getFormatTime(documentStartDate)} ~ {getFormatTime(documentEndDate)}</ResultStyled.DateBar>
          <ResultStyled.DateBar>면접 {getFormatTime(interviewStartDate)} ~ {getFormatTime(interviewEndDate)}</ResultStyled.DateBar>
          <ResultStyled.DateBar>최종 발표 {getFormatTime(noticeEndDate)}</ResultStyled.DateBar>
          <ResultStyled.Description>{description}</ResultStyled.Description>
        </Li>
        <Li style={{flexDirection: 'column'}}>
          <Title className='bold' style={{marginBottom: '33px'}}>공통 질문</Title>
          <ResultStyled.QuestionContainer>{handleQuestion(questions['common'])}</ResultStyled.QuestionContainer>
        </Li>
        <Li style={{flexDirection: 'column'}}>
          <Title className='bold' style={{marginBottom: '33px'}}>서류질문 - 개발자</Title>
          <div>{handleQuestion(questions['programmer'])}</div>
        </Li>
        <Li style={{flexDirection: 'column'}}>
          <Title className='bold' style={{marginBottom: '33px'}}>서류질문 - 디자이너</Title>
          <div>{handleQuestion(questions['designer'])}</div>
        </Li>
        <Li style={{flexDirection: 'column'}}>
          <Title className='bold' style={{marginBottom: '33px'}}>지원개요</Title>
        </Li>
      </Ul>
    </CreateStyled.Container>
  );
}

export default Detail;
