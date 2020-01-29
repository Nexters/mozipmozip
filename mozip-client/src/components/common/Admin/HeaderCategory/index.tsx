import React from 'react'
import './HeaderCategory.scss'
// import *as Styled from './style'

type HeaderCategoryProps = {
  item : string[]
}

function HeaderCategory(props: HeaderCategoryProps){
  const { item } = props
  return(
    <div className="category_layout">
      <ul className="category_ul">
        <li className="category_li">{item[0]}</li>&nbsp;&nbsp;|&nbsp;&nbsp;
        <li className="category_li">{item[1]}</li>
      </ul>
    </div>
  )
}

export default HeaderCategory
