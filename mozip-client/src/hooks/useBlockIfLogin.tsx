import {useSelector} from "react-redux";
import {RootState} from "../modules";
import {useHistory} from 'react-router-dom';

export default function useBlockIfLogin() {
  // 로그인 o -> 메인페이지로 redirect
  const users = useSelector((state: RootState) => state.users);
  const history = useHistory();
  const {userInfo: {name}} = users;
  if (name) history.push('/');
}
