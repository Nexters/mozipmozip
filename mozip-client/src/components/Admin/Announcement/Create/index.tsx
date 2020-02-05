import React from 'react'
import *as Styled from './styled'
import Intro from "./Intro"
import ProgressBar from "../../../common/Admin/ProgressBar"

type CreateProps = {
  subPath: string
}

function Create(props: CreateProps){
  const { subPath } = props;
  return(
    <>
      <ProgressBar subPath={subPath}/>
      <Styled.Layout>
        {subPath === 'intro' && <Intro/>}
      </Styled.Layout>
    </>
  )
}

export default Create
