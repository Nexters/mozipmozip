import styled from 'styled-components';

const Ul = styled.ul`
  position : fixed;
  display: inline-flex;
  align-items: center;
  height: 50px;
  width: 100vw;
  top: 70px;
  list-style: none;
  background: #F7F8F9;
`;

const Li = styled.li<{ left: number }>`
  margin-left: ${({ left }) => left + 'px'};
  font-style: normal;
  font-size: 15px;
  line-height: 22px;
  color: #262A2F;
  cursor: pointer;
  
  & + li {
    margin-left: 30px;
  }
  
  &:hover {
    color: #61CB9F;
  }
`;

export {
  Ul,
  Li,
};