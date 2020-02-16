import React, { useState, useEffect } from 'react';
import * as Styled from './styled';
import Intro from './Intro';
import RegisterTitle from '../../RegisterTitle';
import Result from './Result';
import Questions from "./Questions";


function Create() {
  const [page, setPage] = useState(5);
  return (
    <Styled.Container>
      <RegisterTitle page={page} />
      <Styled.Layout>
        {page === 1 && <Intro onPage={setPage}/>}
        {page === 2 && <Questions onPage={setPage} pageType="common" />}
        {page === 3 && <Questions onPage={setPage} pageType="programmer" />}
        {page === 4 && <Questions onPage={setPage} pageType="designer" />}
        {page === 5 && <Result onPage={setPage} />}
      </Styled.Layout>
    </Styled.Container>
  );
}

export default Create;
