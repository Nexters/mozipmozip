import React from 'react';
import * as styled from './styled';
import Banner from '../../../banner';
import { useResumes } from '../../../../../hooks';

type CompleteProps = {
  history: {
    push: (url: string) => void;
  };
};

function Complete({ history }: CompleteProps) {
  const { resumes } = useResumes();
  const target = resumes.occupation === 'DESIGNER' ? '디자이너' : '개발자';
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    history.push('/');
  };
  return (
    <styled.Main>
      <Banner />
      <styled.Occupation>{`NEXTERS 17기 ${target}`}</styled.Occupation>
      <styled.EndMessage>지원이 완료되었습니다!</styled.EndMessage>
      <styled.Button onClick={handleClick}>내 지원서 확인</styled.Button>
    </styled.Main>
  );
}

export default Complete;
