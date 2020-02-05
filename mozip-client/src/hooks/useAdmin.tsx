import {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../modules";
import {setFormValues} from "../modules/admin";

export default function useAdmin() {
  const dispatch = useDispatch();
  const {recruit} = useSelector((state: RootState) => state.admin);
  const onSetFormValues = useCallback((name: string, value: any) => dispatch(setFormValues(name, value)),[dispatch])
  return {
    recruit,
    onSetFormValues
  };
}
