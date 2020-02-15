import React, { Fragment, useCallback } from 'react';
import * as Styled from './style';

function RegisterTitle(props: { subPath: string }) {
  const { subPath } = props;

  const getProgressNumber = (subPath: string) => {
    switch (subPath) {
      case 'intro':
        return 0;
      case 'common':
        return 1;
      case 'group':
        return 2;
      case 'result':
        return 3;
      default:
        throw new Error('Unhandled SubPath');
    }
  };

  const getProgressTitle = (param: string | number) => {
    if (param === 0 || param === 'intro') return '리쿠르팅 소개';
    else if (param === 1 || param === 'common') return '공통 질문';
    else if (param === 2 || param === 'group') return '직군 별 질문';
    else return '최종 확인';
  };


  const drawProgressShape = useCallback((subPath: string) => {
    const arr = [ '', '', '', '' ];
    return arr.map((v, i) => {
      const targetIndex = getProgressNumber(subPath);
      return (
        <Fragment key={i}>
          <Styled.Circle className={(targetIndex === i ? ' active' : '')} />
          {i !== 3 && <Styled.Line />}
        </Fragment>
      );
    });
  }, [ subPath ]);

  const drawProgressText = useCallback((subPath: string) => {
    const arr = [ '', '', '', '' ];
    return arr.map((v, i) => {
      const targetIndex = getProgressNumber(subPath);
      const text = getProgressTitle(i);
      return (
        <Styled.Text
          key={i}
          className={(targetIndex === i ? ' active' : '')}
        >
          {text}
        </Styled.Text>
      );
    });
  }, [ subPath ]);

  return (
    <Styled.Container>
      <Styled.Title>공고 등록</Styled.Title>
      <Styled.Wrapper>
        <Styled.SubTitle>{getProgressTitle(subPath)} 작성</Styled.SubTitle>
        <Styled.ProgressBar>
          <Styled.Half>
            {drawProgressShape(subPath)}
          </Styled.Half>
          <Styled.Half>
            {drawProgressText(subPath)}
          </Styled.Half>
        </Styled.ProgressBar>
      </Styled.Wrapper>
    </Styled.Container>
  );
}

export default RegisterTitle;
