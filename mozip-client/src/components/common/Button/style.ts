import styled from 'styled-components';

interface IButtonProps {
  width: string,
  height: string,
  border: string,
  borderRadius: string,
  background: string,
  color: string,
  fontSize: string
}

const Button = styled.button<IButtonProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  cursor: pointer;
`;

export {
  Button,
};
