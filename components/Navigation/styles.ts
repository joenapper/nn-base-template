import styled from "styled-components";
import { colors, deviceBelow, spacing } from "../../styles/theme";
import type { NavBarWrapperProps, NavItemsProps, NavItemProps } from "./types";

export const navHeight = "80px";
export const navMenuReady = deviceBelow.tablet;

export const NavBarWrapper = styled.header<NavBarWrapperProps>`
  background: ${({ hasScrolled }) =>
    hasScrolled ? "rgba(255,255,255, 0.8)" : `${colors.white}`};
  box-shadow: ${({ hasScrolled }) => hasScrolled && "5px 5px 18px #888888"};
  backdrop-filter: blur(8px);
  transition: all 0.5s ease;
  position: fixed;
  height: ${navHeight};
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #f4f4f4;
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${spacing.none} ${spacing.s6};

  @media ${navMenuReady} {
    justify-content: space-between;
    padding: ${spacing.none} ${spacing.s4};
  }
`;

export const NavItems = styled.ul<NavItemsProps>`
  display: flex;
  align-items: center;
  margin-left: ${spacing.s7};
  color: ${colors.secondary};

  @media ${navMenuReady} {
    position: absolute;
    padding: ${navHeight} max(16px, 10%);
    align-items: flex-start;
    gap: ${spacing.s4};
    top: 0;
    right: 0;
    height: 100vh;
    /* background-color: ${colors.black}; */
    background-color: ${colors.white};
    width: 90%;
    flex-direction: column;
    transform: ${({ navActive }) =>
      navActive ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.35s ease-in;
    overflow-x: hidden;
    z-index: 1;

    &::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 8px;
      height: 100vh;
      background-color: ${colors.primary};
    }
  }
`;

export const NavItem = styled.li<NavItemProps>`
  margin-left: ${spacing.s4};
  color: ${({ isActiveLink }) => isActiveLink && `${colors.primary}`};

  &:hover {
    color: ${colors.primary};
  }

  @media ${navMenuReady} {
    margin-left: ${spacing.none};
    padding: ${spacing.s2};
  }
`;
