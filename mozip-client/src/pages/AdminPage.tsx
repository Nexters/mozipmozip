import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import MainContainer from '../containers/Admin/MainContainer';
import Create from '../components/Admin/Notice/Create';
import Header from '../components/common/Header';
import {useBlockIfNotAdmin} from "../hooks";
import {Detail, List} from "../components/Admin/Notice";

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

  const {match: {params: {path, subPath}}, history} = props;

  // useBlockIfNotAdmin();

  const handleRoute = (path: string) => {
    if (!path) return <MainContainer/>;
    else {
      if (path === 'create') return <Create/>;
      else if (path === 'list') return <List/>;
      else if (path === 'detail') return <Detail/>;
    }
  };
  return (
    <>
      <Header categories={categories}/>
      {handleRoute(path)}
    </>
  );
}

export default AdminPage;
