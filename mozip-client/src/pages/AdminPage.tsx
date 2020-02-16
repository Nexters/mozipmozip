import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import MainContainer from '../containers/Admin/MainContainer';
import Create from '../components/Admin/Notice/Create';
import Header from '../components/common/Header';
import {useBlockIfNotAdmin} from "../hooks";

// 관리자 아니면 redirect 하는 기능 필요
function AdminPage(props: RouteComponentProps<{ path: string, subPath: string }>) {
  const categories = [
    {
      title: '진행중인 리쿠르팅',
      navigation: [
        {
          title: '디자이너',
          link: '',
        },
        {
          title: '개발자',
          link: '',
        },
        {
          title: '면접',
          link: '',
        },
      ],
    },
    {
      title: '리쿠르팅 목록',
    },
  ];

  const { match: { params: { path, subPath } }, history } = props;
  useBlockIfNotAdmin();
  return (
    <>
      <Header categories={categories} />
      {
        !path ?
          <MainContainer />
          :
          (
            path === 'create' ?
              <Create subPath={subPath} history={history} />
              :
              ''// 진행자 현황 보는 페이지 컴포넌트?
          )
      }
    </>
  );
}

export default AdminPage;
