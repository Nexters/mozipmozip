import React from 'react';

import {useAdmin} from '../../../../../hooks';
import Question from '../Question';
import Button from '../../../../common/Button';
import {ButtonWrapper, Li, Title, Ul} from '../styled';
import {NoticeQuestion} from '../../../../../modules/admin';

type QuestionsProps = {
  onPage: (page: number) => void
  pageType: 'common' | 'designer' | 'programmer'
}

function Questions(props: QuestionsProps) {
  const {onPage, pageType} = props;
  const {admin, onAddQuestion} = useAdmin();
  const {questions} = admin;

  const handleMapList = (questions: NoticeQuestion[]) => {
    return questions.map((v, i) => {
      const {title, type, maxLength, questionScore} = v;
      const total = questions.map((v: NoticeQuestion) => v.questionScore).reduce((a: number, b: number) => a + b, 0);
      return (
        <Question
          key={i}
          index={i}
          total={total}
          pageType={pageType}
          title={title}
          type={type}
          maxLength={maxLength}
          questionScore={questionScore}/>
      );
    });
  };

  const handleAddQuestion = () => {
    const lastIndex = (questions[pageType] as NoticeQuestion[]).length - 1;
    const lastQuestion = questions[pageType][lastIndex];
    const {title, type, questionScore, maxLength} = lastQuestion;
    if (!title) return alert(`질문${lastIndex + 1} 제목을 입력해 주세요.`);
    if (type === 'long') { // default type is long -> '주관식'
      if (!maxLength) return alert(`질문${lastIndex + 1} 최대 글자수를 입력해 주세요.`);
    }
    ;
    if (!questionScore) return alert(`질문${lastIndex + 1} 배점을 입력해 주세요.`);
    else return onAddQuestion(pageType);
  };

  const handlePage = (buttonType: string) => {
    if (pageType === 'common') onPage(buttonType === 'prev' ? 1 : 3);
    else if (pageType === 'programmer') onPage(buttonType === 'prev' ? 2 : 4);
    else onPage(buttonType === 'prev' ? 3 : 5);
  };

  const getTitle = (pageType: 'common' | 'designer' | 'programmer') => {
    switch (pageType) {
      case 'common':
        return '공통질문';
      case 'designer':
        return '디자이너 질문';
      case 'programmer':
        return '개발자 질문';
      default:
        return 'Unhandled Type';
    }
  };

  return (
    <>
      <Title className='bold'>{getTitle(pageType)}</Title>
      <Ul>
        {handleMapList(questions[pageType])}
        <Li>
          <Button
            text='질문 추가하기'
            onClick={handleAddQuestion}
            width='149px'
            height='40px'
            color='#48B788'
            border='1px solid #61CB9F'
            borderRadius='4px'
            background='#FFFFFF'
            fontSize='15px'
          />
        </Li>
        <ButtonWrapper>
          <Button text={'임시저장'} width='153px' height='64px' color='#61CB9F'
                  border='1px solid #61CB9F' background='#ffffff'/>
          <Button onClick={() => handlePage('prev')} text={'이전'} width='207px' height='64px' background='#262A2F'/>
          <Button onClick={() => handlePage('next')} text={'다음'} width='207px' height='64px'/>
        </ButtonWrapper>
      </Ul>
    </>
  );
}

export default Questions;
