import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react';
import { setUserInfo } from '../modules/resumes';

export default function useResumes() {
  const dispatch = useDispatch();
  const resumes = useSelector((state: RootState) => state.resumes);
  const onSaveUserInfo = useCallback(
    (name: string, value: any) => dispatch(setUserInfo(name, value)),
    [dispatch],
  );
  return {
    resumes,
    onSaveUserInfo,
  };
}
