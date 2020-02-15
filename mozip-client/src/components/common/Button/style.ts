import styled from 'styled-components';

interface IButtonProps {
  width: string,
  height: string,
  borderRadius: string,
  background: string,
  color: string
}

const Button = styled.button<IButtonProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  font-size: 20px;
  cursor: pointer;
`;

export {
  Button,
};
