import styled from 'styled-components';

import { valueToRem } from 'utils/mixins';

export const ContactsItem = styled.li`
  margin: 0 auto;
  padding: ${valueToRem(10)} ${p => p.theme.space[4]};
  width: 80%;
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[2]};
  background-color: ${p => p.theme.colors.white};
  border-bottom: 2px solid ${p => p.theme.colors.border};

  transition: scale ${p => p.theme.transitions.main};

  :hover {
    scale: 1.003;
  }
`;

export const ContactName = styled.h3`
  flex: 1 1 33.33%;

  font-weight: ${p => p.theme.fontWeights.medium};
`;

export const ContactNumber = styled.p`
  flex: 1 1 33.33%;
`;

export const ContactCtrl = styled.div`
  margin-left: auto;
  display: flex;
  gap: ${p => p.theme.space[2]};
`;

const StyledBtn = styled.button`
  padding-top: ${p => p.theme.space[2]};
  padding-bottom: ${p => p.theme.space[2]};
  padding-left: ${p => p.theme.space[3]};
  padding-right: ${p => p.theme.space[3]};

  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[2]};

  font-weight: ${p => p.theme.fontWeights.bold};

  border: 1px solid transparent;
  border-radius: ${p => p.theme.space[2]};

  cursor: pointer;
  transition: color ${p => p.theme.transitions.main},
    background-color ${p => p.theme.transitions.main};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
  }
`;

export const ContactEditBtn = styled(StyledBtn)`
  color: ${p => p.theme.colors.btnText};
  background-color: ${p => p.theme.colors.btnBackground};
  border-color: ${p => p.theme.colors.btnAccent};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.btnAccent};
  }
`;

export const ContactDeleteBtn = styled(StyledBtn)`
  color: ${p => p.theme.colors.textAccent};
  background-color: ${p => p.theme.colors.btnBgSecondary};
  border-color: ${p => p.theme.colors.textAccent};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.textAccent};
  }
`;
