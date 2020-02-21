import {useSelector} from "react-redux";
import {RootState} from "../modules";
import {useHistory} from 'react-router-dom';

export default function useBlockIfNotLogin() {
  // 로그인 x -> 로그인 페이지로 redirect
  const users = useSelector((state: RootState) => state.users);
  const history = useHistory();
  const {userInfo: {name}} = users;
  if (!name) history.replace('/signIn');
}
