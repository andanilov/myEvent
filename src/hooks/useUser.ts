import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../store'
import { setUser } from '../store/userSlice';

export default function () {
  // Global State
  const dispatch  = useDispatch();
  const currentUser = useSelector((state: IRootState) => state.user.user); 

  const navigate = useNavigate();

  return {
    currentUser,
    setCurrentUser: (user: object): void => { dispatch(setUser(user)); },
    unsetCurrentUser: (): void => { 
      dispatch(setUser({}));
      navigate('/');
    },
  }
}
