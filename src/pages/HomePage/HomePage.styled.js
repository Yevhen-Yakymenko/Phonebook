import styled from 'styled-components';

import { GiCandlestickPhone, GiBlackBook } from 'react-icons/gi';
import { AiOutlinePlus } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

export const HomePageSection = styled.section`
  padding: ${p => p.theme.space[4]}px;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const StyledLink = styled(NavLink)`
  display: flex;
  gap: 64px;
  align-items: center;
  color: palevioletred;
  opacity: 0.4;
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
