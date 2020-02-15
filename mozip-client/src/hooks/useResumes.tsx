import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react';
import { setUserInfo, postResumesRequest, UserState } from '../modules/resumes';

export default function useResumes() {
  const dispatch = useDispatch();
  const resumes = useSelector((state: RootState) => state.resumes);
  const onSaveUserInfo = useCallback(
    (name: string, value: any) => dispatch(setUserInfo(name, value)),
    [dispatch],
  );
  const onPostNotice = useCallback(
    (values: UserState) => dispatch(postResumesRequest(values)),
    [dispatch],
  );

  return {
    resumes,
    onSaveUserInfo,
    onPostNotice,
  };
}
