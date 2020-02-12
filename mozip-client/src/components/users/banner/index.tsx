import React from 'react';
import styled from 'styled-components';
import mainImage from '../../../static/images/main-image.png';

const BannerTag = styled.div`
  overflow: hidden;
  width: 100%;
  height: 300px;
  padding-left: 5rem;
  background-image: url(${mainImage});
  background-repeat: no-repeat;
  background-position: 0 58%;
  background-size: cover;
`;

function Banner() {
  return <BannerTag></BannerTag>;
}

export default Banner;
