import React, { FocusEvent } from 'react';
import * as Styled from './style';

interface IInputFormProps {
  title: string,
  placeholder?: string,
  errorMessage?: string,
}

// TODO ref 추가
function InputForm(props: IInputFormProps) {
  const { title, placeholder, errorMessage } = props;

  const handleFocusInput = (e: FocusEvent<HTMLInputElement>) => {
    const inputWrapper = e.target.parentElement;
    inputWrapper && controlFocusClass(inputWrapper, true);
  };

  const handleBlurInput = (e: FocusEvent<HTMLInputElement>) => {
    const inputWrapper = e.target.parentElement;
    inputWrapper && controlFocusClass(inputWrapper, false);
  };

  const controlFocusClass = (target: HTMLElement , focus: boolean) => {
    focus ? target.classList.add('focus') : target.classList.remove('focus');
  };

  return (
    <Styled.Container>
      <Styled.TextWrapper>
        <Styled.Title>{title}</Styled.Title>
        <Styled.ErrorText>{errorMessage}</Styled.ErrorText>
      </Styled.TextWrapper>
      <Styled.InputWrapper>
        <Styled.Input placeholder={placeholder} onFocus={handleFocusInput} onBlur={handleBlurInput} />
      </Styled.InputWrapper>
    </Styled.Container>
  )
}

export default InputForm;