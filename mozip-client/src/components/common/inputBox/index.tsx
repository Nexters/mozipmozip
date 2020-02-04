import React from 'react';
import * as styled from './styled';

type InputBoxProps = {
  name: string;
  placeholder: string;
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

export default InputBox;
