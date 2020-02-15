import React, {useEffect} from 'react';
import { useAdmin } from "../../../../hooks";
import {Ul, Li} from "../Create/styled";
import {Notice, NoticeStatus} from "../../../../modules/admin";
import moment from "moment";

const switchNoticeStatus = (noticeStats: NoticeStatus) => {
  switch (noticeStats) {
    case 'DRAFT':
      return '임시저장';
    case 'PUBLISHED':
      return '서류모집 중';
    case 'DOCUMENT':
      return '서류심사 중';
    case 'INTERVIEW':
      return '면접 중';
    case 'END':
      return '모집종료';
    default:
      return 'Unhandled Case';
  }
};


function List() {
  const { admin, onGetNotices } = useAdmin();
  const { status: {getNoticeStatus}, noticeList } = admin;
  const handleNoticeList = (noticeList: Notice[]) => {
    return noticeList.map( (v,i) => {
      const { id, title, description, startDateTime, endDateTime, noticeStatus} = v;
      return (
        <tr key={id}>
          <td>{title}</td>
          <td>{switchNoticeStatus(noticeStatus)}</td>
          <td>{startDateTime}</td>
        </tr>
      );
    })
  };

  useEffect(()=>{
    onGetNotices()
  },[]);
  return (
    <Ul>
      <Li>
        <table>
          <thead>
          <tr>
            <td style={{width: "40%"}}>공고</td>
            <td style={{width: "30%"}}>상태</td>
            <td style={{width: "30%"}}>기간</td>
          </tr>
          </thead>
          <tbody>
          {getNoticeStatus === 'success' && handleNoticeList(noticeList)}
          </tbody>
        </table>
      </Li>
    </Ul>
  );
}

export default List;
