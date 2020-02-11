import React from 'react';
import Banner from '../../../banner';
import InputBox, { CheckBoxGroup } from '../../../../common/inputBox';
import * as styled from './styled';
import { useResumes } from '../../../../../hooks';

const ProgrammerJobTypes: string[] = ['Server', 'Front', 'Android', 'ios'];
const DesignerJobTypes: string[] = ['UX', 'UI', 'GUI'];

type UserInfoProps = {
  history: {
    push: (url: string) => void;
  };
};

function UserInfo(props: UserInfoProps) {
  const { resumes, onSaveUserInfo } = useResumes();
  const checkName = (name: string) => {
    if (/[`~!@#$%^&*|\\\'\";:\/?]/.test(name))
      alert('특수기호가 없는 이름을 입력해주세요');
    else onSaveUserInfo('name', name);
  };
  const checkPhone = (phone: string) => {
    if (!/^\d{3}-\d{3,4}-\d{4}$/.test(phone))
      alert('올바른 형식의 전화번호를 입력해주세요');
    else onSaveUserInfo('phoneNumber', phone);
  };
  const checkEmail = (email: string) => {
    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!regExp.test(email)) alert('올바른 형식의 이메일을 입력해주세요');
    else onSaveUserInfo('email', email);
  };
  const onToggle = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    let target = e.target as HTMLInputElement;
    resumes.jobTypes.includes(target.value)
      ? onSaveUserInfo(
          'jobTypes',
          resumes.jobTypes.filter(i => i !== target.value),
        )
      : onSaveUserInfo('jobTypes', [...resumes.jobTypes, target.value]);
  };
  const handleNextPage = () => {
    if (!resumes.name) alert('이름을 입력해주세요');
    else if (!resumes.phoneNumber) alert('전화번호를 입력해주세요');
    else if (!resumes.email) alert('이메일을 입력해주세요');
    else if (!resumes.jobTypes.length) alert('직무를 선택해주세요');
    else props.history.push('/resumes/create/answers');
  };
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    handleNextPage();
  };
  return (
    <>
      <Banner occupationType={resumes.occupation} />
      <styled.FormBg>
        <styled.Form>
          <InputBox name="이름" placeholder="" validationCheck={checkName} />
          <InputBox
            name="전화번호"
            placeholder="010-XXXX-XXXX"
            validationCheck={checkPhone}
          />
          <InputBox
            name="이메일"
            placeholder="(ex) nexters@gmail.com"
            validationCheck={checkEmail}
          />
          {resumes.occupation === 'DESIGNER' ? (
            <CheckBoxGroup
              name="직무선택"
              valueList={DesignerJobTypes}
              onToggle={onToggle}
            />
          ) : (
            <CheckBoxGroup
              name="직무선택"
              valueList={ProgrammerJobTypes}
              onToggle={onToggle}
            />
          )}
          <styled.Button onClick={onClick}>다음</styled.Button>
        </styled.Form>
      </styled.FormBg>
    </>
  );
}

export default UserInfo;
