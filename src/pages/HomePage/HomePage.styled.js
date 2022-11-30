import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { GiCandlestickPhone, GiBlackBook } from 'react-icons/gi';
import { AiOutlinePlus } from 'react-icons/ai';

import { Box } from 'components/Container/Container.styled';

export const HomePageSection = styled.section`
  position: relative;
  background: linear-gradient(180deg, #f4f7ff 0%, #f1f5ff 100%);
`;

export const DecorBox = styled.div`
  height: 50%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    180deg,
    rgba(75, 113, 255, 0) -0.13%,
    rgba(107, 137, 248, 0.4) 131.12%
  );
`;

export const Container = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ContentText = styled.p`
  font-family: ${p => p.theme.fonts.secondary};
  color: black;

  :last-child {
    align-self: flex-end;
  }
`;

export const ContentLink = styled(NavLink)`
  display: flex;
  gap: 64px;
  align-items: center;
  color: palevioletred;
  opacity: 0.4;
  z-index: 100;
  transition: opacity 100ms linear;

  :hover {
    opacity: 1;
  }
`;

export const StyledIconPhone = styled(GiCandlestickPhone)`
  height: 300px;
  width: 300px;
  vertical-align: middle;
`;

export const StyledIconBook = styled(GiBlackBook)`
  height: 300px;
  width: 300px;
  vertical-align: middle;
`;

export const StyledIconPlus = styled(AiOutlinePlus)`
  height: 150px;
  width: 150px;
  vertical-align: middle;
`;
