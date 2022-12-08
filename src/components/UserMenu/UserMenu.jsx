import { skipToken } from '@reduxjs/toolkit/query/react';

import { useGetUserQuery, useLogOutMutation } from 'redux/user/userApi';
import { useAuth } from 'hooks/useAuth';
import { MenuWrapper, UserName, BtnLogOut, BtnIcon } from './UserMenu.styled';

const UserMenu = () => {
  const { isLoggedIn, token } = useAuth();
  const { data, isSuccess } = useGetUserQuery(token ?? skipToken);
  const [logOut] = useLogOutMutation();

  return (
    isLoggedIn &&
    isSuccess && (
      <MenuWrapper>
        <UserName> {data.name} </UserName>
        <BtnLogOut type="button" onClick={() => logOut()}>
          <BtnIcon />
        </BtnLogOut>
      </MenuWrapper>
    )
  );
};

export default UserMenu;
