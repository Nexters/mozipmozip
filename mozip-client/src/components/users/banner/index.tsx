import React from 'react';
import styled from 'styled-components';
import mainImage from '../../../static/images/main-image.png';

const BannerBgTag = styled.div`
  display: flex;
  justify-content: center;
`;

const BannerTag = styled.div`
  width: 1440px;
  height: 296px;
  background-image: url(${mainImage});
  background-repeat: no-repeat;
  background-position: 0 50%;
`;

function Banner() {
  return (
    <BannerBgTag>
      <BannerTag />
    </BannerBgTag>
  );
}

export default Banner;
