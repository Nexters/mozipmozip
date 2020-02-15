import React, { FocusEvent } from 'react';
import * as Styled from './style';

interface IInputFormProps {
  name: string,
  title: string,
  type?: string,
  placeholder?: string,
  errorMessage?: string,
  required?: boolean,
  onState: (name: string, value: string) => void
}

// TODO ref 추가
function InputForm(props: IInputFormProps) {
  const { name, title, type = 'text', placeholder, errorMessage, required = true, onState} = props;

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
        <Styled.Input
          name={name}
          type={type}
          placeholder={placeholder}
          onFocus={handleFocusInput}
          onBlur={handleBlurInput}
          required={required}
          onChange={ e => onState(name, e.target.value)}
        />
      </Styled.InputWrapper>
    </Styled.Container>
  )
}

export default InputForm;
