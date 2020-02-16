import React, {FunctionComponent} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../modules";
import {useHistory} from 'react-router-dom';


export default function useBlockIfNotAdmin(){
  // 어드민 user x => main page redirect
  const users = useSelector((state: RootState) => state.users);
  const history = useHistory();
  const {userInfo: {admin}} = users;
  if(!admin) history.push('/')
}
