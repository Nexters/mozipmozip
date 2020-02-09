import React from 'react'
import *as Styled from './styled'
import Intro from "./Intro"
import ProgressBar from "../../../common/Admin/ProgressBar"
import CommonQuestion from "./CommonQuestion";

type CreateProps = {
  subPath: string
  history: {
    push: (url: string) => void
  }
}

function Create(props: CreateProps){
  const { subPath, history } = props;
  return(
    <>
      <ProgressBar subPath={subPath}/>
      <Styled.Layout>
        {subPath === 'intro' && <Intro history={history}/>}
        {subPath === 'common' && <CommonQuestion history={history}/>}

      </Styled.Layout>
    </>
  )
}

export default Create
