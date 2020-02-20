import React, { useState } from 'react';
import * as styled from './styled';
import { useResumes } from '../../../hooks';

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
  const { resumes, onSaveUserInfo } = useResumes();
  const [list, setList] = useState(resumes.jobTypes);
  const handleToggle = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    onToggle(e);
    const target = e.target as HTMLInputElement;
    setList(
      list.includes(target.value)
        ? list.filter(i => i !== target.value)
        : [...list, target.value],
    );
  };
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
              onClick={handleToggle}
              checked={list.includes(value)}
            />
            <styled.CheckboxLabel htmlFor={value}>{value}</styled.CheckboxLabel>
          </styled.CheckboxBg>
        ))}
      </styled.CheckboxGroup>
    </styled.Main>
  );
}

export default CheckBoxGroup;
