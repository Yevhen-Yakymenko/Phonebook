import LogoIcon from 'components/LogoIcon';

import { StyledLogoLink } from './LogoLink.styled';

const LogoLink = ({ closeMenu }) => {
  return (
    <StyledLogoLink to={'/'} title="Home" onClick={() => closeMenu()}>
      Phone <LogoIcon /> book
    </StyledLogoLink>
  );
};

export default LogoLink;
