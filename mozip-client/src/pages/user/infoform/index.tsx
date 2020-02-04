import React from 'react';
import Layout from '../../../components/common/Layout';
import Banner from '../../../components/user/banner';
import InputBox, { RadioBox } from '../../../components/common/inputBox';
import * as styled from './styled';

function UserInfoForm() {
  return (
    <Layout>
      <Banner />
      <styled.FormBg>
        <styled.Form>
          <InputBox name="이름" placeholder="" />
          <InputBox name="전화번호" placeholder="010-XXXX-XXXX" />
          <InputBox name="이메일" placeholder="(ex) nexters@gmail.com" />
          <RadioBox name="직무선택" valueList={['UX', 'UI', 'GUI']} />
          <styled.Button>다음</styled.Button>
        </styled.Form>
      </styled.FormBg>
    </Layout>
  );
}

export default UserInfoForm;
