import { forwardRef } from 'react';
import { NavWrapper } from './NavBox.styled';

const NavBox = forwardRef(({ children }, ref) => {
  return <NavWrapper ref={ref}>{children}</NavWrapper>;
});

export default NavBox;
