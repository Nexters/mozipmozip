import React, { FocusEvent, useState } from 'react';
import * as styled from './styled';
import uploadImg from '../../../static/images/uploadImg.png';
import useResumes from '../../../hooks/useResumes';

type AnswerBoxProps = {
  question: string;
  idx: number;
  maxLength: number;
};

type PortfolioBoxProps = {
  questionNo: number;
  question: string;
};

function PortfolioBox({ questionNo, question }: PortfolioBoxProps) {
  return (
    <styled.PortfolioMain>
      <styled.QuestionTag>
        {questionNo}. {question}
      </styled.QuestionTag>
      <styled.UploadBtnBox>
        <styled.UploadBtn>
          <img src={uploadImg} alt="" /> 업로드 하기
        </styled.UploadBtn>
        <styled.UploadFileNameBox>이윤희.pdf</styled.UploadFileNameBox>
      </styled.UploadBtnBox>
    </styled.PortfolioMain>
  );
}

function AnswerBox({ question, idx, maxLength }: AnswerBoxProps) {
  const { resumes, onSaveUserInfo } = useResumes();
  const initialQuestion = resumes.resumeAnswerItems.filter(
    ({ questionNo }) => questionNo === idx,
  );
  const initialText = initialQuestion.length ? initialQuestion[0].answer : '';
  const [curText, setCurText] = useState(initialText);
  const [textLength, setTextLength] = useState(0);
  const handleFocusInput = (e: FocusEvent<HTMLTextAreaElement>) => {
    const inputWrapper = e.target.parentElement;
    inputWrapper && controlFocusClass(inputWrapper, true);
  };

  const handleBlurInput = (e: FocusEvent<HTMLTextAreaElement>) => {
    const inputWrapper = e.target.parentElement;
    inputWrapper && controlFocusClass(inputWrapper, false);
    const qnum =
      e.target.dataset.questionNo && parseInt(e.target.dataset.questionNo);
    onSaveUserInfo('resumeAnswerItems', [
      ...resumes.resumeAnswerItems.filter(item => item.questionNo !== qnum),
      { questionNo: qnum, answer: curText },
    ]);
  };
  const controlFocusClass = (target: HTMLElement, focus: boolean) => {
    focus ? target.classList.add('focus') : target.classList.remove('focus');
  };
  const handleKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    setTextLength(target.value.length);
  };
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setCurText(e.target.value);
  return (
    <styled.Main>
      <styled.QuestionTag>
        {idx}. {question}
      </styled.QuestionTag>
      <styled.TextBoxBg>
        <styled.TextArea
          onFocus={handleFocusInput}
          onBlur={handleBlurInput}
          data-question-no={idx}
          maxLength={maxLength}
          onKeyUp={handleKeyUp}
          onChange={handleChange}
          value={curText}
          required
        />
      </styled.TextBoxBg>
      <styled.Footer>
        <styled.Limit>
          {textLength} / {maxLength}
        </styled.Limit>
        <styled.Button type="button">맞춤법검사</styled.Button>
      </styled.Footer>
    </styled.Main>
  );
}

export { AnswerBox, PortfolioBox };
