import React from 'react';
import * as Styled from './styled';

type BannerProps = {
  occupationType: string;
};

function Banner({ occupationType }: BannerProps) {
  return (
    <Styled.Banner>
      <div>
        NEXTERS 17기 {occupationType === 'DESIGNER' ? '디자이너' : '개발자'}{' '}
        지원
      </div>
    </Styled.Banner>
  );
}

export default Banner;
