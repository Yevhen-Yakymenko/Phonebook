import LogoIcon from 'components/LogoIcon';

import { StyledLogoLink } from './LogoLink.styled';

const LogoLink = () => {
  return (
    <StyledLogoLink to={'/'} title="Home">
      Phone <LogoIcon /> book
    </StyledLogoLink>
  );
};

export default LogoLink;
