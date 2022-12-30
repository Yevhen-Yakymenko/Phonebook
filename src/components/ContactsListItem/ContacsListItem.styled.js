import styled from 'styled-components';

import { valueToRem } from 'utils/mixins';

export const ContactsItem = styled.li`
  margin: 0 auto;
  padding-top: ${p => p.theme.space[2]};
  padding-bottom: ${p => p.theme.space[2]};
  padding-left: ${p => p.theme.space[2]};
  padding-right: ${p => p.theme.space[2]};
  width: 100%;

  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[2]};

  background-color: ${p => p.theme.colors.white};
  border-bottom: 2px solid ${p => p.theme.colors.border};

  transition: scale ${p => p.theme.transitions.main};

  :hover {
    scale: 1.003;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    padding-top: ${valueToRem(10)};
    padding-bottom: ${valueToRem(10)};
    padding-left: ${p => p.theme.space[4]};
    padding-right: ${p => p.theme.space[4]};
    width: 90%;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 80%;
  }
`;

export const ContactInfo = styled.div`
  flex: 1 1 100%;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    display: flex;
    align-items: center;
  }
`;

export const ContactName = styled.h3`
  font-weight: ${p => p.theme.fontWeights.medium};

  @media screen and (max-width: calc(${p => p.theme.breakpoints[0]} - 0.6px)) {
    margin-bottom: 4px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    flex: 1 1 33.33%;
  }
`;

export const ContactNumber = styled.p`
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    flex: 1 1 33.33%;
    text-align: center;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    text-align: start;
  }
`;

export const ContactCtrl = styled.div`
  margin-left: auto;
  display: flex;
  gap: ${p => p.theme.space[2]};
`;

export const ContactEditBtn = styled.button.attrs(_ => ({
  className: 'btn-main btn-main__primary',
}))``;

export const ContactDeleteBtn = styled.button.attrs(_ => ({
  className: 'btn-main btn-main__secondary',
}))``;
