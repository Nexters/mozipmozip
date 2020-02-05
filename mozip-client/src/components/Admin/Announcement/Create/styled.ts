import styled from 'styled-components'

export const Layout = styled.div`
  width: 76%; // 100% - 24%
  padding: 0 12%;
`
export const Ul = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  margin-top: 5%;
  margin-bottom: 25%;
  & > li + li {
   margin-top: 37px;
  }
 `;

export const Li = styled.li`
  width: 90%;
  margin-left: 10%;
  display: flex; 
`;

export const SubLayer = styled.div`
  width: 70%;
  display: flex;
  align-items: flex-end;
`;

export const SubTitle = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 17px;
  line-height: 20px;
`;
