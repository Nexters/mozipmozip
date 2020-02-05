import React from 'react';
import * as styled from './styled';

type InputBoxProps = {
  name: string;
  placeholder: string;
};
type RadioBoxProps = {
  name: string;
  valueList: string[];
};

function InputBox({ name, placeholder }: InputBoxProps) {
  return (
    <styled.InputBox>
      <div className="label-bg">
        <label htmlFor={name}>{name}</label>
      </div>
      <div className="input-bg">
        <input type="text" id={name} name={name} placeholder={placeholder} />
      </div>
    </styled.InputBox>
  );
}

export function RadioBox({ name, valueList }: RadioBoxProps) {
  return (
    <styled.InputBox>
      <div className="label-bg">{name}</div>
      <ul className="radio-group-bg">
        {valueList.map(value => (
          <li className="radio-bg">
            <input
              type="radio"
              value={value}
              name={name}
              id={value}
              className="radio-custom"
            />
            <label htmlFor="value" className="radio-custom-label">
              {value}
            </label>
          </li>
        ))}
      </ul>
    </styled.InputBox>
  );
}

export default InputBox;
