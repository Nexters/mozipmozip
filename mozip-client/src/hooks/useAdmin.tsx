import {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../modules";
import {
  setFormValues,
  setQuestionValue,
  SetQuestion, addQuestion,
} from "../modules/admin";

export default function useAdmin() {
  const dispatch = useDispatch();
  const admin = useSelector((state: RootState) => state.admin);
  const onSetFormValues = useCallback((name: string, value: any) => dispatch(setFormValues(name, value)), [dispatch]);
  const onSetQuestionValue = useCallback((args: SetQuestion) =>
    dispatch(setQuestionValue({...args})), [dispatch]);
  const onAddQuestion = useCallback((name: string)=>dispatch(addQuestion(name)),[dispatch])
  return {
    admin,
    onSetFormValues,
    onSetQuestionValue,
    onAddQuestion
  };
}
