import React from 'react';
import * as Styled from './style';
import { Link } from 'react-router-dom';
import { useResumes } from '../../../hooks';

import mainImage from '../../../static/images/main-image.png';

function MainContainer() {
  const { onSaveUserInfo } = useResumes();
  return (
    <Styled.Main>
      <Styled.Container>
        <Styled.MainImage src={mainImage} />
        <Styled.ContentWrapper>
          <Styled.ButtonWrapper>
            <Link to={'./resumes/create/userInfo'}>
              <Styled.Button background='#61CB9F' className='bold'
                             onClick={() => onSaveUserInfo('occupation', 'PROGRAMMER')}>개발자 지원하기</Styled.Button>
            </Link>
            <Link to={'./resumes/create/userInfo'}>
              <Styled.Button background='#262A2F' className='bold right'
                             onClick={() => onSaveUserInfo('occupation', 'DESIGNER')}>디자이너 지원하기</Styled.Button>
            </Link>
          </Styled.ButtonWrapper>
          <Styled.Description>
            연합동아리 NEXTERS는 IT 생태계의 주인공인 개발자와 디자이너를 위한 모임입니다.
            재능있는 개발자와 디자이너가 함께 모여 자유로운 분위기에서 어울리고 도움을 주고받으며 협업을 통해 원하는 서비스를 만듭니다.
            <br /><br />
            NEXTERS에서는 수도권 인근의 대학생들과 직장인들이 주로 활동하고 있습니다.<br />
            대학생은 실무에서의 경험과 노하우를 배우며 진로를 세부적으로 검증할 수 있고,<br />
            실무자는 제한이 적은 자유로운 활동을 통해 창의력을 키워나갈 수 있는 기회가 될 것입니다.
          </Styled.Description>
        </Styled.ContentWrapper>
      </Styled.Container>
    </Styled.Main>
  );
};

export default MainContainer;