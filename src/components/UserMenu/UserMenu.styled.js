import styled from 'styled-components';

export const MenuWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]};

  font-size: ${p => p.theme.fontSizes[4]};
  font-weight: ${p => p.theme.fontWeights.medium};
`;

export const UserName = styled.p`
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const BtnLogOut = styled.button.attrs(_ => ({
  className: 'btn-main btn-main__secondary',
}))`
  border-color: transparent;
`;
