import {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../modules";
import {
  setFormValues,
  clearError,
  setQuestionValue,
  addQuestion,
  postNoticeRequest,
  SetQuestion, NoticeObject, getNoticesRequest, getNoticeOneRequest,
} from "../modules/admin";

export default function useAdmin() {
  const dispatch = useDispatch();
  const admin = useSelector((state: RootState) => state.admin);
  const onSetFormValues = useCallback((name: string, value: any) => dispatch(setFormValues(name, value)), [dispatch]);
  const onClearError = useCallback((keyName: string) => dispatch(clearError(keyName)), [dispatch]);
  const onSetQuestionValue = useCallback((args: SetQuestion) =>
    dispatch(setQuestionValue({...args})), [dispatch]);
  const onAddQuestion = useCallback((name: string) => dispatch(addQuestion(name)), [dispatch]);
  const onPostNotice = useCallback((submitObj: NoticeObject) => dispatch(postNoticeRequest(submitObj)), [dispatch]);
  const onGetNotices = useCallback(() => dispatch(getNoticesRequest()), [dispatch]);
  const onGetNoticeOne = useCallback((id: number) => dispatch(getNoticeOneRequest(id)), [dispatch]);

  return {
    admin,
    onSetFormValues,
    onClearError,
    onSetQuestionValue,
    onAddQuestion,

    onPostNotice,
    onGetNotices,
    onGetNoticeOne
  };
}
