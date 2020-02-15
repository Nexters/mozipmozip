import {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../modules";
import {
  setFormValues,
  setQuestionValue,
  addQuestion,
  postNoticeRequest,
  SetQuestion, NoticeObject, getNoticesRequest,
} from "../modules/admin";

export default function useAdmin() {
  const dispatch = useDispatch();
  const admin = useSelector((state: RootState) => state.admin);
  const onSetFormValues = useCallback((name: string, value: any) => dispatch(setFormValues(name, value)), [dispatch]);
  const onSetQuestionValue = useCallback((args: SetQuestion) =>
    dispatch(setQuestionValue({...args})), [dispatch]);
  const onAddQuestion = useCallback((name: string) => dispatch(addQuestion(name)), [dispatch]);
  const onPostNotice = useCallback((submitObj: NoticeObject) => dispatch(postNoticeRequest(submitObj)), [dispatch]);
  const onGetNotices = useCallback(() => dispatch(getNoticesRequest()), [dispatch]);

  return {
    admin,
    onSetFormValues,
    onSetQuestionValue,
    onAddQuestion,

    onPostNotice,
    onGetNotices
  };
}
