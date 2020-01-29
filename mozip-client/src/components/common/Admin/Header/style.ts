import styled from 'styled-components'

export const Header = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  padding: 55px 200px;
`
export const Half = styled.div`
  width: calc(50% - 200px) !important;
  display: flex;
`

export const Title = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 900; 
  font-size: 30px;
  line-height: 35px;
  margin-right: 5%;
`

export const Category = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0 0 0 auto;
`
export const CategoryItem = styled.li`
  // position : relative;
  font-family: Roboto, sans-serif;
  font-weight: 900;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.3);
  white-space : nowrap
`

export const Name = styled.span`
  margin-left : auto; 
  font-family: Roboto, sans-serif;
  font-size : 19px;
  line-height : 40px;
  text-align : center;
  margin-right : 3%;
`

export const Profile = styled.span`
  background : #C4C4C4;
  width : 40px;
  height : 40px;
  border-radius : 50%;
`
