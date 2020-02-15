import {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fileUpload} from "../modules/base";
import {RootState} from "../modules";

export default function useBase() {
  const dispatch = useDispatch();
  const base = useSelector((state: RootState) => state.base);
  const onFileUpload = useCallback((data: string) => dispatch(fileUpload(data)), [dispatch]);
  return {
    base,
    onFileUpload
  };
}
