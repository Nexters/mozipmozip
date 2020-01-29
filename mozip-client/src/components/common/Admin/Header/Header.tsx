import React from 'react'
import *as Styled from './style'

function Header(){
  return(
      <Styled.Header>
        <Styled.Half>
          <Styled.Title>모집모집</Styled.Title>
          <Styled.Category>
            <Styled.CategoryItem
              style={{paddingRight : '5%'}}
            >진행중인 리쿠르팅</Styled.CategoryItem>
            <Styled.CategoryItem>리쿠르팅 목록</Styled.CategoryItem>
          </Styled.Category>
        </Styled.Half>
        <Styled.Half>
          <Styled.Name>홍동욱</Styled.Name>
          <Styled.Profile/>
        </Styled.Half>
      </Styled.Header>
  )
}

export default Header
