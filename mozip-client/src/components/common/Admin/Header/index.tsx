import React from 'react'
import './Header.scss'
import HeaderCategory from "../HeaderCategory"
// import *as Styled from './style'

function Header() {
  return (
    <>
      <div className="header_layout">
        <div className="header_half">
          <div className="header_title">모집모집</div>
          <ul>
            <li className="header_category">진행중인 리쿠르팅
              <HeaderCategory/>
            </li>
            <li className="header_category">리쿠르팅 목록</li>
          </ul>
        </div>
        <div className="header_half">
          <span className="header_name">홍동욱</span>
          <span className="header_profile"/>
        </div>
      </div>
      {/*<Styled.Header>*/}
      {/*  <Styled.Half>*/}
      {/*    <Styled.Title>모집모집</Styled.Title>*/}
      {/*    <Styled.Category>*/}
      {/*      <Styled.CategoryItem style={{paddingRight: '30%'}}>*/}
      {/*        진행중인 리쿠르팅*/}
      {/*        /!*<HeaderCategory/>*!/*/}
      {/*      </Styled.CategoryItem>*/}
      {/*      <Styled.CategoryItem>*/}
      {/*        리쿠르팅 목록*/}
      {/*        /!*<HeaderCategory/>*!/*/}
      {/*      </Styled.CategoryItem>*/}
      {/*    </Styled.Category>*/}
      {/*  </Styled.Half>*/}
      {/*  <Styled.Half>*/}
      {/*    <Styled.Name>홍동욱</Styled.Name>*/}
      {/*    <Styled.Profile/>*/}
      {/*  </Styled.Half>*/}
      {/*</Styled.Header>*/}
    </>
  )
}

export default Header
