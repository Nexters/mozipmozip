import React from 'react'
import *as Styled from './styled'

function ProgressBar(){
  return(
    <div style={{width : '400px'}}>
      <Styled.Half>
        <Styled.Circle/>
        <Styled.Line/>
        <Styled.Circle/>
        <Styled.Line/>
        <Styled.Circle/>
        <Styled.Line/>
        <Styled.Circle/>
      </Styled.Half>
      <Styled.Half>
        <Styled.Text>리쿠르팅 소개<br/>작성</Styled.Text>
        <Styled.Text>공통 질문<br/>작성</Styled.Text>
        <Styled.Text>직군 별 질문<br/>작성</Styled.Text>
        <Styled.Text>최종확인<br/>작성</Styled.Text>
      </Styled.Half>
    </div>
  )
}

export default ProgressBar
