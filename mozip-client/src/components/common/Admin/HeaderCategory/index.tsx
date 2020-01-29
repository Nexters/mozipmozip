import React from 'react'
import './HeaderCategory.scss'
// import *as Styled from './style'

function HeaderCategory(){
  return(
    <div className="category_layout">
      <ul className="category_ul">
        <li className="category_li">개발자 디자이너</li>&nbsp;&nbsp;|&nbsp;&nbsp;
        <li className="category_li">면접</li>
      </ul>
    </div>
  )
}

export default HeaderCategory
