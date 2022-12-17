import styled from 'styled-components';

export const ContactsItem = styled.li`
  margin: 0 auto;
  padding: 10px 32px;
  width: 80%;
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.white};
  border-bottom: 2px solid ${p => p.theme.colors.border};

  transition: scale ${p => p.theme.transitions.main};

  :hover {
    scale: 1.003;
  }
`;

export const ContactName = styled.h3`
  flex: 1 1 33.33%;

  font-weight: 500;
`;

export const ContactNumber = styled.p`
  flex: 1 1 33.33%;
`;

export const ContactCtrl = styled.div`
  margin-left: auto;
  display: flex;
  gap: ${p => p.theme.space[2]}px;
`;

const StyledBtn = styled.button`
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;

  display: flex;
  align-items: center;
  gap: 8px;

  font-weight: ${p => p.theme.fontWeights.bold};

  border: 1px solid transparent;
  border-radius: ${p => p.theme.space[2]}px;

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
  color: #d43f3f;
  background-color: #ffd7d7;
  border-color: #d43f3f;

  &:hover,
  &:focus {
    background-color: #d43f3f;
  }
`;
