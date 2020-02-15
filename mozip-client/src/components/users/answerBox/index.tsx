import React, { FocusEvent } from 'react';
import * as styled from './styled';
import uploadImg from '../../../static/images/uploadImg.png';

type AnswerBoxProps = {
  question: string;
  idx: number;
  maxLength: number;
};

function PortfolioBox() {
  return (
    <styled.PortfolioMain>
      <styled.QuestionTag>
        4. 포트폴리오를 제출해주세요.(10MB 이하)
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
  const handleFocusInput = (e: FocusEvent<HTMLTextAreaElement>) => {
    const inputWrapper = e.target.parentElement;
    inputWrapper && controlFocusClass(inputWrapper, true);
  };

  const handleBlurInput = (e: FocusEvent<HTMLTextAreaElement>) => {
    const inputWrapper = e.target.parentElement;
    inputWrapper && controlFocusClass(inputWrapper, false);
  };
  const controlFocusClass = (target: HTMLElement, focus: boolean) => {
    focus ? target.classList.add('focus') : target.classList.remove('focus');
  };
  return (
    <styled.Main>
      <styled.QuestionTag>
        {idx}. {question}
      </styled.QuestionTag>
      <styled.TextBoxBg>
        <styled.TextArea onFocus={handleFocusInput} onBlur={handleBlurInput} />
      </styled.TextBoxBg>
      <styled.Footer>
        <styled.Limit>
          {maxLength} / {maxLength}
        </styled.Limit>
        <styled.Button type="button">맞춤법검사</styled.Button>
      </styled.Footer>
    </styled.Main>
  );
}

export { AnswerBox, PortfolioBox };
