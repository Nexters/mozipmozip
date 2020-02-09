import React from 'react';
import Layout from '../../../../common/Layout';
import Banner from '../../../banner';
import InputBox, { RadioBox } from '../../../../common/inputBox';
import * as styled from './styled';
import { useResumes } from '../../../../../hooks';

enum Programmer {
  SERVER = 'Server',
  FRONT = 'Front',
  ANDROID = 'Android',
  IOS = 'ios',
}
function UserInfo() {
  const { resumes } = useResumes();
  return (
    <>
      <Banner occupationType={resumes.occupation} />
      <styled.FormBg>
        <styled.Form>
          <InputBox name="이름" placeholder="" />
          <InputBox name="전화번호" placeholder="010-XXXX-XXXX" />
          <InputBox name="이메일" placeholder="(ex) nexters@gmail.com" />
          {resumes.occupation === 'DESIGNER' ? (
            <RadioBox name="직무선택" valueList={['UX', 'UI', 'GUI']} />
          ) : (
            <RadioBox
              name="직무선택"
              valueList={['Server', 'Front', 'Android', 'ios']}
            />
          )}

          <styled.Button>다음</styled.Button>
        </styled.Form>
      </styled.FormBg>
    </>
  );
}

export default UserInfo;
