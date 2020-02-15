import {useSelector} from "react-redux";
import {RootState} from "../modules";
import {useHistory} from 'react-router-dom';

export default function useIsLogin() {
  const users = useSelector((state: RootState) => state.users);
  const history = useHistory();
  const {userInfo: {name}} = users;
  if (!name) history.push('/signIn');
}
