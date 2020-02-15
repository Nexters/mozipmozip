import React from 'react';
import { useHistory } from 'react-router-dom';

import { useAdmin } from '../../../../../hooks';
import Question from '../Question';
import Button from '../../../../common/Button';
import { ButtonWrapper, Li, Title, Ul } from '../styled';
import { NoticeQuestion } from '../../../../../modules/admin';

function CommonQuestion() {
  const history = useHistory();
  const { admin, onAddQuestion } = useAdmin();
  const { questions: { common } } = admin;

  const handleMapList = (questions: NoticeQuestion[]) => {
    return questions.map((v, i) => {
      const { title, type, maxLength, questionScore } = v;
      const total = questions.map((v: NoticeQuestion) => v.questionScore).reduce((a: number, b: number) => a + b, 0);
      return (
        <Question
          key={i}
          index={i}
          total={total}
          pageType="common"
          title={title}
          type={type}
          maxLength={maxLength}
          questionScore={questionScore} />
      );
    });
  };

  const handleAddQuestion = () => {
    const lastIndex = (common as NoticeQuestion[]).length - 1;
    const lastQuestion = common[lastIndex];
    const { title, type, questionScore, maxLength } = lastQuestion;
    if (!title) return alert(`질문${lastIndex + 1} 제목을 입력해 주세요.`);
    if (type === 'long') { // default type is long -> '주관식'
      if (!maxLength) return alert(`질문${lastIndex + 1} 최대 글자수를 입력해 주세요.`);
    }
    ;
    if (!questionScore) return alert(`질문${lastIndex + 1} 배점을 입력해 주세요.`);
    else return onAddQuestion('common');
  };

  const handleNextPage = () => history.push('/admin/create/group');
  const handlePrevPage = () => history.goBack();

  return (
    <>
      <Title className='bold'>공통 질문</Title>
      <Ul>
        {handleMapList(common)}
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
                  border='1px solid #61CB9F' background='#ffffff' />
          <Button onClick={handlePrevPage} text={'이전'} width='207px' height='64px' background='#262A2F' />
          <Button onClick={handleNextPage} text={'다음'} width='207px' height='64px' />
        </ButtonWrapper>
      </Ul>
    </>
  );
}

export default CommonQuestion;
