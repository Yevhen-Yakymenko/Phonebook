import { forwardRef } from 'react';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

import { BurgerBtn, BurgerIconBox } from './BurgerMenu.styled';

const BurgerMenu = forwardRef(({ switcher, showMenu, ...props }, ref) => {
  return (
    <BurgerBtn
      type="button"
      aria-expanded={switcher}
      onClick={() => showMenu()}
      ref={ref}
      {...props}
    >
      <BurgerIconBox aria-label="mobile menu switch">
        {!switcher ? <IoMenuOutline /> : <IoCloseOutline />}
      </BurgerIconBox>
    </BurgerBtn>
  );
});

export default BurgerMenu;
