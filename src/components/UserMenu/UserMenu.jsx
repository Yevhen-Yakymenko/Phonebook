import { skipToken } from '@reduxjs/toolkit/query/react';
// import { IoExitOutline } from 'react-icons/io5';
import { FiLogOut } from 'react-icons/fi';

import { useGetUserQuery, useLogOutMutation } from 'redux/user/userApi';
import { useAuth } from 'hooks/useAuth';
import { MenuWrapper, UserName, BtnLogOut } from './UserMenu.styled';
import { BtnIconBox, BtnText } from 'components/GlobalStyle';

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
          <BtnText>Log out</BtnText>{' '}
          <BtnIconBox>
            <FiLogOut />
          </BtnIconBox>
        </BtnLogOut>
      </MenuWrapper>
    )
  );
};

export default UserMenu;
