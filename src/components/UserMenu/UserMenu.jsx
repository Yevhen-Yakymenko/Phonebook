import { useLogOutMutation } from 'redux/user/userApi';

import { MenuWrapper } from './UserMenu.styled';

const UserMenu = () => {
  const [logOut] = useLogOutMutation();

  return (
    <MenuWrapper>
      <p>ava </p>
      <p> name </p>
      <button type="button" onClick={() => logOut()}>
        Log Out
      </button>
    </MenuWrapper>
  );
};

export default UserMenu;
