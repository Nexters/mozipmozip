import { useCallback } from 'react';
import {useDispatch} from "react-redux";
import {fileUpload} from "../modules/base";

export default function useBase(){
  const dispatch = useDispatch()
  const onFileUpload = useCallback((data: object)=>dispatch(fileUpload(data)), [dispatch]);
  return{
    onFileUpload
  }
}
