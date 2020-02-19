import React, { FocusEvent } from 'react';
import * as styled from './styled';

type InputBoxProps = {
  name: string;
  placeholder: string;
  validationCheck: (name: string) => void;
};
type CheckBoxProps = {
  name: string;
  valueList: string[];
  onToggle: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
};

function InputBox({ name, placeholder, validationCheck }: InputBoxProps) {
  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    validationCheck(e.target.value);
    handleBlurInput(e);
  };

  const handleFocusInput = (e: FocusEvent<HTMLInputElement>) => {
    const inputWrapper = e.target.parentElement;
    inputWrapper && controlFocusClass(inputWrapper, true);
  };

  const handleBlurInput = (e: FocusEvent<HTMLInputElement>) => {
    const inputWrapper = e.target.parentElement;
    inputWrapper && controlFocusClass(inputWrapper, false);
  };

  const controlFocusClass = (target: HTMLElement, focus: boolean) => {
    focus ? target.classList.add('focus') : target.classList.remove('focus');
  };
  return (
    <styled.Main>
      <styled.TitleBg>
        <styled.Title htmlFor={name}>{name}</styled.Title>
      </styled.TitleBg>
      <styled.InputBg>
        <styled.Input
          id={name}
          name={name}
          placeholder={placeholder}
          onBlur={onBlur}
          onFocus={handleFocusInput}
          required
        />
      </styled.InputBg>
    </styled.Main>
  );
}

export default InputBox;
