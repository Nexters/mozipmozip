import styled from 'styled-components';

export const Main = styled.div`
  font-weight: 500;
  margin-top: 26px;
`;

export const Title = styled.div`
  font-size: 13px;
  line-height: 19px;
  color: #46494e;
`;

export const CheckboxGroup = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 317px;
  margin-top: 9px;
`;

export const CheckboxBg = styled.li`
  position: relative;
  margin-right: 11px;
  display: flex;
  align-items: center;
`;

export const Checkbox = styled.input`
  opacity: 0;
  position: absolute;
  cursor: pointer;
`;

export const CheckboxLabel = styled.label`
  font-size: 17px;
  line-height: 160%;
  color: #262a2f;
  &:before {
    content: '';
    border: 1.5px solid #d0d3d8;
    box-sizing: border-box;
    border-radius: 4px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 11px;
    width: 20px;
    height: 20px;
  }
  input:checked + &:before {
    background: #61cb9f;
    border: none;
  }
  input:checked ~ &:after {
    content: '';
    position: absolute;
    left: 6px;
    top: 7px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
