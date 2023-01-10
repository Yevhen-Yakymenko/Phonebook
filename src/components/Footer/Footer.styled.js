import styled from 'styled-components';

export const MainFooter = styled.div`
  color: ${p => p.theme.colors.white};
  background-color: #222222;
`;

export const SectionContainer = styled.div.attrs(_ => ({
  className: 'container',
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[4]};
  min-height: 60px;
`;

export const SocialLinksList = styled.ul`
  display: flex;
  gap: ${p => p.theme.space[3]};
`;

export const CopyrightText = styled.p`
  & > a {
    text-decoration: underline;
    color: inherit;

    transition: color ${p => p.theme.transitions.main};

    &:hover {
      color: #ff6464;
    }
  }
`;

export const SocialLink = styled.a`
  font-size: ${p => p.theme.fontSizes[6]};
  color: inherit;

  transition: color ${p => p.theme.transitions.main};

  &:hover {
    color: #ff6464;
  }

  & > span {
    display: flex;
  }
`;
