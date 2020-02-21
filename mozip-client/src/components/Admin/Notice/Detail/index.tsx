import React, {Fragment, useEffect, useCallback} from 'react';
import {Li, Title, Ul} from "../Create/styled";
import * as ResultStyled from "../Create/Result/style";
import * as CreateStyled from '../Create/styled';
import * as Styled from './styled';
import moment from "moment";
import {useAdmin} from "../../../../hooks";
import {useHistory} from "react-router-dom";
import {NoticeQuestion} from "../../../../modules/admin";
import ReactMinimalPieChart from 'react-minimal-pie-chart';

function Detail({id}: { id: number }) {
  const {admin, onGetNoticeOne} = useAdmin();
  const history = useHistory();
  const {
    title, description, documentStartDate, documentEndDate, interviewStartDate, interviewEndDate, noticeEndDate, questions,
  } = admin;

  const getFormatTime = (date: Date) => {
    return moment(date).format('YYYY.MM.DD');
  };
  const handleQuestion = (questions: NoticeQuestion[]) => {
    return questions.map((v, i) => {
      const {questionScore, maxLength, type, title} = v;
      return (
        <ResultStyled.QuestionWrapper key={`detail ${i}`}>
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

  const handlePieChart = () => {
    return ['temp', 'temp'].map((v: string, i) => {
      return (
        <Fragment key={`pieChart${i}`}>
          <div>전체 지원자</div>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <ReactMinimalPieChart
              animate={false}
              animationDuration={500}
              animationEasing="ease-out"
              style={{width: '250px', height: '250px'}}
              data={[
                {
                  color: '#E38627',
                  title: 'One',
                  value: 10
                },
                {
                  color: '#C13C37',
                  title: 'Two',
                  value: 15
                },
                {
                  color: '#6A2135',
                  title: 'Three',
                  value: 20
                }
              ]}
              label={false}
              labelPosition={50}
              lengthAngle={360}
              lineWidth={100}
              onClick={undefined}
              onMouseOut={undefined}
              onMouseOver={undefined}
              paddingAngle={0}
              radius={40}
              rounded={false}
              startAngle={0}
              viewBoxSize={[
                50,
                50
              ]}
            />
            <div>개발자/디자이너/일반인</div>
          </div>
        </Fragment>
      );
    });
  };
  useEffect(()=> {
    onGetNoticeOne(id);
  },[]);
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
          <div>
            {handlePieChart()}
          </div>
        </Li>
      </Ul>
    </CreateStyled.Container>
  );
}

export default Detail;
