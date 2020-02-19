import React, { useEffect } from 'react';
import moment from 'moment';
import * as Styled from './style';
import { useAdmin } from '../../../../hooks';
import { Notice, NoticeStatus } from '../../../../modules/admin';

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
  const { status: { getNoticeStatus }, noticeList } = admin;
  const handleNoticeList = (noticeList: Notice[]) => {
    return noticeList.map(notice => {
      const { id, title, startDateTime, endDateTime, noticeStatus } = notice;
      return (
        <Styled.Tr key={'notice' + id}>
          <Styled.Td>{title}</Styled.Td>
          <Styled.Td>{switchNoticeStatus(noticeStatus)}</Styled.Td>
          <Styled.Td>{moment(startDateTime).format('YYYY. MM. DD') + ' ~ ' + moment(endDateTime).format('YYYY. MM. DD')}</Styled.Td>
        </Styled.Tr>
      );
    });
  };

  useEffect(() => {
    onGetNotices();
  }, []);
  return (
    <Styled.Container>
      <Styled.Table>
        <Styled.Thead>
          <Styled.Tr>
            <td style={{ width: '393px' }}>공고</td>
            <td style={{ width: '363px' }}>상태</td>
            <td>기간</td>
          </Styled.Tr>
        </Styled.Thead>
        <Styled.Tbody>
          {getNoticeStatus === 'success' && handleNoticeList(noticeList)}
        </Styled.Tbody>
      </Styled.Table>
    </Styled.Container>
  );
}

export default List;
