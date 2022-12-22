import LogoIcon from 'components/LogoIcon';

import { StyledLogoLink } from './LogoLink.styled';

const LogoLink = ({ isMenuOpen, showMenu }) => {
  const handleClose = () => {
    if (isMenuOpen) {
      showMenu();
    }
  };
  return (
    <StyledLogoLink to={'/'} title="Home" onClick={() => handleClose()}>
      Phone <LogoIcon /> book
    </StyledLogoLink>
  );
};

export default LogoLink;
