import React from 'react';
import * as styled from './styled';

type CheckBoxGroupProps = {
  name: string;
  title: string;
  valueList: string[];
  onToggle: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
};

function CheckBoxGroup({
  name,
  title,
  valueList,
  onToggle,
}: CheckBoxGroupProps) {
  return (
    <styled.Main>
      <styled.Title>{title}</styled.Title>
      <styled.CheckboxGroup>
        {valueList.map((value, idx) => (
          <styled.CheckboxBg key={'checkbox' + idx}>
            <styled.Checkbox
              type="checkbox"
              value={value}
              name={name}
              id={value}
              className="checkbox-custom"
              onClick={onToggle}
            />
            <styled.CheckboxLabel htmlFor={value}>{value}</styled.CheckboxLabel>
          </styled.CheckboxBg>
        ))}
      </styled.CheckboxGroup>
    </styled.Main>
  );
}

export default CheckBoxGroup;
