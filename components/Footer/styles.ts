import styled from "styled-components";
import { fontSize, spacing } from "../../styles/theme";

export const FooterWrapper = styled.footer`
  font-size: ${fontSize.xs};
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: ${spacing.s1};
  align-items: center;
  padding: ${spacing.s4};
`;
