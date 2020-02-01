import React from 'react'
import *as Styled from './styled'
import {Link} from "react-router-dom"

function Index(){
  return(
    <>
      <Styled.Banner/>
      <Styled.BottomSection>
        <Styled.Button>
          <Styled.IconPlus>+</Styled.IconPlus>
          <Link to={'/admin/create/intro'} style={{textDecoration: 'none'}}>리쿠르팅 등록하기</Link>
        </Styled.Button>
      </Styled.BottomSection>
    </>
  )
}

export default Index
