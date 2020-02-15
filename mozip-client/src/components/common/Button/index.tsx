import React from 'react';
import * as Styled from './style';

interface IButtonProps {
  text: string,
  onClick?: Function,
  width?: string,
  height?: string,
  border?: string,
  borderRadius?: string,
  background?: string,
  color?: string
}

function Button(props: IButtonProps) {
  const {
    text, onClick, width = '317px', height = '70px', border = '0',
    borderRadius = '8px', background = '#61CB9F', color = '#FFFFFF',
  } = props;

  return (
    <Styled.Button
      width={width}
      height={height}
      border={border}
      borderRadius={borderRadius}
      background={background}
      color={color}
      className='bold'
      onClick={() => onClick && onClick()}
    >
      {text}
    </Styled.Button>
  );
}

export default Button;