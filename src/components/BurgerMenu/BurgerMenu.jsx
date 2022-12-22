import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

import { BurgerBtn, BurgerIconBox } from './BurgerMenu.styled';

const BurgerMenu = ({ switcher, showMenu, ...props }) => {
  return (
    <BurgerBtn
      type="button"
      aria-expanded={switcher}
      onClick={() => showMenu()}
      {...props}
    >
      <BurgerIconBox aria-label="mobile menu switch">
        {!switcher ? <IoMenuOutline /> : <IoCloseOutline />}
      </BurgerIconBox>
    </BurgerBtn>
  );
};

export default BurgerMenu;
