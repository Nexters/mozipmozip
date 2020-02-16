import React, {FunctionComponent} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../modules";
import {useHistory} from 'react-router-dom';

type UseIsAdmin = {
  children: FunctionComponent
}

export default function useIsAdmin(props: UseIsAdmin){
  const { children } = props;
  const users = useSelector((state: RootState) => state.users);
  const history = useHistory();
  const {userInfo: {name, admin}} = users;
  // if(!admin)
}
