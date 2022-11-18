import { useSelector } from 'react-redux';
import {
  selectUser,
  selectToken,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/user/userSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    token,
  };
};
