import React from 'react'
import Intro from "./Intro"

type CreateProps = {
  subPath: string
}

function Create(props: CreateProps){
  const { subPath } = props
  return(
   <>
     {subPath === 'intro' && <Intro/>}
   </>
  )
}

export default Create
