import React, {useState} from 'react'
import './index.scss'
import HeaderCategory from "../HeaderCategory"
// import *as Styled from './style'

function Header() {
  const [visible, setVisible] = useState({
    category1 : false,
    category2 : false,
  })
  const { category1, category2 } = visible
  return (
    <>
      <div className="header_layout">
        <div className="header_half">
          <div className="header_title">모집모집</div>
          <ul>
            <li className="header_category"
                onClick={()=>setVisible({category1: !category1, category2: false})}
            >진행중인 리쿠르팅
              {category1 && <HeaderCategory item={['개발자 디자이너','면접']}/>}
            </li>
            <li className="header_category"
                onClick={()=>setVisible({category1: false, category2: !category2})}
            >리쿠르팅 목록
              {category2 && <HeaderCategory item={['카테고리1','카테고리2']}/>}
            </li>
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
