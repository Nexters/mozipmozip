import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';

export default function useResumes() {
  const dispatch = useDispatch();
  const resumes = useSelector((state: RootState) => state.resumes);
  return {
    resumes,
  };
}
