import React, { FocusEvent, useState } from 'react';
import * as styled from './styled';
import { useResumes } from '../../../hooks';
import { hasKey } from '../../../modules/admin';

type nameProps = 'email' | 'name' | 'phoneNumber';

type InputBoxProps = {
  name: nameProps;
  title: string;
  placeholder: string;
  type: string;
  validation: (value: string) => boolean;
  setState: (value: string) => void;
};

function InputBox({
  name,
  title,
  placeholder,
  type,
  validation,
  setState,
}: InputBoxProps) {
  const { resumes, onSaveUserInfo } = useResumes();
  const [curText, setCurText] = useState(
    hasKey(resumes, name) ? resumes[name] : '',
  );
  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(validation);
    console.log(validation(e.target.value));
    if (!e.target.value) return;
    if (validation(e.target.value)) alert(`올바른 ${title}을 입력해주세요`);
    else setState(e.target.value);
    handleBlurInput(e);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurText(e.target.value);
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
        <styled.Title htmlFor={name}>{title}</styled.Title>
      </styled.TitleBg>
      <styled.InputBg>
        <styled.Input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onBlur={onBlur}
          onFocus={handleFocusInput}
          onChange={handleChange}
          value={curText}
          required
        />
      </styled.InputBg>
    </styled.Main>
  );
}

export default InputBox;
