import React from 'react';
import {Layout} from "../components/common/Admin";
import {RouteComponentProps} from 'react-router-dom';
import Main from "../components/Admin/Main";
import Create from "../components/Admin/Announcement/Create";


// 관리자 아니면 redirect 하는 기능 필요
function AdminPage(props: RouteComponentProps<{ path: string, subPath: string }>) {
  const { match: { params: { path, subPath } }, history } = props;
  return (
    <Layout>
      {
        !path ?
          <Main/>
          :
          (
            path === 'create' ?
              <Create subPath={subPath} history={history}/>
              :
              ''// 진행자 현황 보는 페이지 컴포넌트?
          )
      }
    </Layout>
  );
}

export default AdminPage;
