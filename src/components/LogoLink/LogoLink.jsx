import LogoIcon from 'components/LogoIcon';

import { StyledLogoLink } from './LogoLink.styled';

const LogoLink = ({ ...props }) => {
  return (
    <StyledLogoLink {...props}>
      Phone <LogoIcon /> book
    </StyledLogoLink>
  );
};

export default LogoLink;
