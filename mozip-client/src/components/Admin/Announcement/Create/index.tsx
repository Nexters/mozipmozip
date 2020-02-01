import React from 'react'
import './index.scss'
import Intro from "./Intro"
import ProgressBar from "../../../common/Admin/ProgressBar"

type CreateProps = {
  subPath: string
}

function Create(props: CreateProps){
  const { subPath } = props
  return(
    <>
      <ProgressBar subPath={subPath}/>
      <div className="cr_layout">
        {subPath === 'intro' && <Intro/>}
      </div>
    </>
  )
}

export default Create
