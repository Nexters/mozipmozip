import React, {Fragment, useCallback} from 'react';
import * as Styled from './style';

function RegisterTitle(props: { page: number }) {
  const {page} = props;

  const getProgressTitle = (page: number, flag = false) => {
    if (page === 1) return '리쿠르팅 소개';
    else if (page === 2) return '공통 질문';
    else if (page === 4 && flag) return '최종확인';
    else if (page === 3 || page === 4) return '직군 별 질문';
    else if (page === 5) return '최종 확인';
  };


  const isClassActive = (page: number, i: number) => {
    if (page < 4) return page - 1 === i ? 'active' : '';
    else if (page === 4) return i == 2 ? 'active' : '';
    else return i === 3 ? 'active' : '';
  };

  const drawProgressShape = useCallback((page: number) => {
    const arr = ['', '', '', ''];
    return arr.map((v, i) => {
      return (
        <Fragment key={i}>
          <Styled.Circle className={isClassActive(page, i)}/>
          {i !== 3 && <Styled.Line/>}
        </Fragment>
      );
    });
  }, [page]);

  const drawProgressText = useCallback((page: number) => {
    const arr = ['', '', '', ''];
    return arr.map((v, i) => {
      const text = getProgressTitle(i + 1, true);
      return (
        <Styled.Text
          key={i}
          className={isClassActive(page, i)}
        >
          {text}
        </Styled.Text>
      );
    });
  }, [page]);

  return (
    <Styled.Container>
      <Styled.Title>공고 등록</Styled.Title>
      <Styled.Wrapper>
        <Styled.SubTitle>{getProgressTitle(page)}</Styled.SubTitle>
        <Styled.ProgressBar>
          <Styled.Half>
            {drawProgressShape(page)}
          </Styled.Half>
          <Styled.Half>
            {drawProgressText(page)}
          </Styled.Half>
        </Styled.ProgressBar>
      </Styled.Wrapper>
    </Styled.Container>
  );
}

export default RegisterTitle;
