import styled from "styled-components";
import { colors } from "../../../styles/theme";
import { navMenuReady } from "../styles";
import type { LineProps } from "./types";

export const Menu = styled.div`
  display: none;

  @media ${navMenuReady} {
    display: block;
    cursor: pointer;
    z-index: 1;
  }
`;

const Line = styled.div`
  width: 25px;
  height: 3px;
  margin: 5px;
  border-radius: 4px;
  transition: all 0.5s ease;
`;

export const TopLine = styled(Line)<LineProps>`
  background: ${colors.primary};
  transform: ${({ navActive }) =>
    navActive && "rotate(-45deg) translate(-5px, 6px)"};
`;

export const MidLine = styled(Line)<LineProps>`
  background: ${colors.secondary};
  opacity: ${({ navActive }) => navActive && "0"};
`;

export const BtmLine = styled(Line)<LineProps>`
  background: ${colors.primary};
  transform: ${({ navActive }) =>
    navActive && "rotate(45deg) translate(-5px, -6px)"};
`;
