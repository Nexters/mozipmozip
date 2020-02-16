import React from 'react';
import * as Styled from './styled';
import { Link } from 'react-router-dom';
import Button from '../../../components/common/Button';
import banner from '../../../static/images/banner.png';

function MainContainer() {
  return (
    <Styled.Container>
      <Styled.Banner src={banner} />
      <Styled.BottomSection>
        <Link to={'/admin/create'}>
          <Button text={'리쿠르팅 등록하기'} />
        </Link>
      </Styled.BottomSection>
    </Styled.Container>
  );
}

export default MainContainer;
