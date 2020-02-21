import React, { useState } from 'react';
import Banner from '../../../banner';
import InputBox from '../../../inputBox';
import CheckBoxGroup from '../../../CheckBox';
import * as styled from './styled';
import { useResumes } from '../../../../../hooks';

type UserInfoProps = {
  history: {
    push: (url: string) => void;
  };
};

type nameProps = 'email' | 'name' | 'phoneNumber';

type InputBoxProps = {
  name: nameProps;
  title: string;
  placeholder: string;
  type: string;
  validation: (value: string) => boolean;
  setState: (value: string) => void;
};

function UserInfo({ history }: UserInfoProps) {
  const { resumes, onSaveUserInfo } = useResumes();
  const ProgrammerJobTypes = ['Server', 'Web', 'Android', 'iOS'];
  const DesignerJobTypes = ['UX', 'UI', 'GUI'];
  const inputCategories: InputBoxProps[] = [
    {
      name: 'name',
      title: '이름',
      type: 'text',
      placeholder: '',
      validation: (value: string) => /[`~!@#$%^&*|\\'";:/?]/.test(value),
      setState: (value: string) => onSaveUserInfo('name', value),
    },
    {
      name: 'phoneNumber',
      title: '전화번호',
      type: 'text',
      placeholder: '010-XXXX-XXXX',
      validation: (value: string) => !/^\d{3}-\d{3,4}-\d{4}$/.test(value),
      setState: (value: string) => onSaveUserInfo('phoneNumber', value),
    },
    {
      name: 'email',
      title: '이메일',
      placeholder: '(ex) nexters@gmail.com',
      type: 'email',
      validation: (value: string) =>
        !/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/.test(
          value,
        ),
      setState: (value: string) => onSaveUserInfo('email', value),
    },
  ];
  const checkoutCategory = {
    name: 'jobTypes',
    title: '직무선택',
    valueList:
      resumes.occupation === 'DESIGNER' ? DesignerJobTypes : ProgrammerJobTypes,
    onToggle: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      let target = e.target as HTMLInputElement;
      resumes.jobTypes.includes(target.value)
        ? onSaveUserInfo(
            'jobTypes',
            resumes.jobTypes.filter(i => i !== target.value),
          )
        : onSaveUserInfo('jobTypes', [...resumes.jobTypes, target.value]);
    },
  };

  const handleNextPage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!resumes.jobTypes.length) alert('직무를 선택해주세요');
    else history.push('/resumes/create/answers');
  };

  return (
    <styled.Main>
      <Banner />
      <styled.FormBg>
        <styled.Form onSubmit={handleNextPage}>
          <ul>
            {inputCategories.map(elem => (
              <li key={elem.name}>
                <InputBox {...elem} />
              </li>
            ))}
            <li>
              <CheckBoxGroup {...checkoutCategory} />
            </li>
          </ul>
          <styled.Button>다음</styled.Button>
        </styled.Form>
      </styled.FormBg>
    </styled.Main>
  );
}

export default UserInfo;
