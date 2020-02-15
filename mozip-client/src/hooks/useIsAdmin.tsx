import {useSelector} from "react-redux";
import {RootState} from "../modules";
import {useHistory} from 'react-router-dom';

export default function useIsAdmin() {
  const users = useSelector((state: RootState) => state.users);
  const history = useHistory();
  const {userInfo: {admin}} = users;
  if (!admin) history.push('/');
}
