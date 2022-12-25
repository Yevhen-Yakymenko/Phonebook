import { skipToken } from '@reduxjs/toolkit/query/react';
import { FiLogOut } from 'react-icons/fi';

import { useGetUserQuery, useLogOutMutation } from 'redux/user/userApi';
import { useAuth } from 'hooks/useAuth';
import Spinner from 'components/Spinner';

import { MenuWrapper, UserName, BtnLogOut } from './UserMenu.styled';

const UserMenu = () => {
  const { isLoggedIn, token } = useAuth();
  const { data, isSuccess } = useGetUserQuery(token ?? skipToken);
  const [logOut, { isLoading }] = useLogOutMutation();

  return (
    isLoggedIn &&
    isSuccess && (
      <MenuWrapper>
        <UserName> {data.name} </UserName>
        <BtnLogOut
          type="button"
          aria-label="button log out"
          disabled={isLoading}
          onClick={() => logOut()}
        >
          <span className="btn-main__text">Log out</span>{' '}
          {isLoading ? (
            <Spinner loading={isLoading} />
          ) : (
            <span className="btn-main__icon-box">
              <FiLogOut />
            </span>
          )}
        </BtnLogOut>
      </MenuWrapper>
    )
  );
};

export default UserMenu;
