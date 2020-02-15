import React, { FocusEvent } from 'react';
import * as styled from './styled';
import { useResumes } from '../../../hooks';

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
    <styled.InputBox>
      <div className="label-bg">
        <label htmlFor={name}>{name}</label>
      </div>
      <div className="input-bg">
        <input
          type="text"
          id={name}
          name={name}
          placeholder={placeholder}
          onBlur={onBlur}
          onFocus={handleFocusInput}
        />
      </div>
    </styled.InputBox>
  );
}

export function CheckBoxGroup({ name, valueList, onToggle }: CheckBoxProps) {
  const { resumes, onSaveUserInfo } = useResumes();
  return (
    <styled.InputBox>
      <div className="label-bg">{name}</div>
      <ul className="checkbox-group-bg">
        {valueList.map(value => (
          <li className="checkbox-bg">
            <input
              type="checkbox"
              value={value}
              name={name}
              id={value}
              className="checkbox-custom"
              onClick={onToggle}
            />
            <label htmlFor="value" className="checkbox-custom-label">
              {value}
            </label>
          </li>
        ))}
      </ul>
    </styled.InputBox>
  );
}

export default InputBox;
