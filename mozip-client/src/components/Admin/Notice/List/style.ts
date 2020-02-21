import styled from 'styled-components';

export const Container = styled.section`
  margin: 97px 0;
`;

export const Table = styled.table`
  width: 1023px;
  margin: 0 auto;
`;

export const Thead = styled.thead`
  padding: 18px 0;
  border-bottom: 1px solid #424242;
  
  & > tr {
    font-size: 13px;
    line-height: 19px;
    color: #000000;
  }
  
  & > tr > td {
    padding: 18px 24px;
  }
`;

export const Tr = styled.tr`
  & + & {
    border-top: 1px solid #E8E8E8;
  }
`;

export const Tbody = styled.tbody`
  & > tr:first-child > td {
    font-weight: bold;
  }
`;

export const Td = styled.td`
  padding: 38px 24px;
  font-size: 19px;
  line-height: 28px;
  color: #000000;
`;
