import { LogoBox, LogoText, LogoIcon } from './Logo.styled';

const Logo = ({ logoColor = 'primary' }) => {
  return (
    <LogoBox logoColor={logoColor}>
      <LogoText>
        Phone <LogoIcon /> book
      </LogoText>
    </LogoBox>
  );
};

export default Logo;
