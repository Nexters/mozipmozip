import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Navigation from '../Navigation';
import './index.scss';
import {useUsers} from "../../../hooks";

import logo from '../../../static/images/logo.png';
import logoTitle from '../../../static/images/logo-title.png';

interface IHeaderProps {
  categories?: { title: string, link?: string, navigation?: { title: string, link: string }[] }[];
}

function Header({ categories }: IHeaderProps) {
  const [ clickedIndex, setClickedIndex ] = useState(-1);
  const [ navigation, setNavigation ] = useState();
  const history = useHistory();
  const { onGetCurrentUser } = useUsers();

  const handleClickLogo = () => {
    setClickedIndex(-1);
    setNavigation(undefined);
  };
  const handleClickCategory = (index: number) => setClickedIndex(index);
  const showNavigation = (navigation: any) => setNavigation(navigation);

  const renderCategories = () => {
    return categories && categories.map(({ title, link, navigation }, index) => {
      return (
        <li
          key={'category' + index}
          className={'header_category bold' + (index === clickedIndex ? ' clicked' : '')}
          onClick={() => {
            handleClickCategory(index);
            showNavigation(navigation);
            link && history.push(link);
          }}
        >
          {title}
        </li>
      );
    });
  };
  useEffect(()=>{
    onGetCurrentUser()
  },[])
  return (
    <>
      {navigation && <Navigation items={navigation} index={clickedIndex} />}
      <div className="header_wrapper">
        <div className="header_layout">
          <div className="header_half">
            <Link to='/'>
              <div className="header_title" onClick={handleClickLogo}>
                <img className="logo" src={logo} />
                <img className="logo_title" src={logoTitle} />
              </div>
            </Link>
            <ul>
              {renderCategories()}
            </ul>
          </div>
          {
            //TODO 유저 분기처리
          }
          <Link to={'/signin'}>
            <div className="header_half">
              <span className="header_name bold">로그인</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
