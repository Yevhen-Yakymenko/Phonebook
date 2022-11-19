import { skipToken } from '@reduxjs/toolkit/query/react';

import { useGetUserQuery, useLogOutMutation } from 'redux/user/userApi';
import { useAuth } from 'hooks/useAuth';
import { MenuWrapper } from './UserMenu.styled';

const UserMenu = () => {
  const { token } = useAuth();
  const { data } = useGetUserQuery(token ?? skipToken);
  const [logOut] = useLogOutMutation();

  return (
    <MenuWrapper>
      <p>ava </p>
      <p> {data.name} </p>
      <button type="button" onClick={() => logOut()}>
        Log Out
      </button>
    </MenuWrapper>
  );
};

export default UserMenu;
