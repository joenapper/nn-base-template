export const breakpoints = {
  mobile: "320px",
  largeMobile: "428px",
  tablet: "768px",
  largeTablet: "1024px",
  desktop: "1440px",
  largeDesktop: "1920px",
} as const;

export const deviceAbove = Object.fromEntries(
  Object.entries(breakpoints).map(([key, value]) => [
    key,
    `(min-width: ${value})`,
  ])
) as unknown as typeof breakpoints;

export const deviceBelow = Object.fromEntries(
  Object.entries(breakpoints).map(([key, value]) => [
    key,
    `(max-width: ${value})`,
  ])
) as unknown as typeof breakpoints;

export const colors = {
  white: "#FFFFFF",
  black: "#000000",
  primary: "#0070f3",
  secondary: "#696969",
  // secondary: "#222222",
} as const;

export const fontSize = {
  xs: "12px",
  sm: "14px",
  base: "16px",
  lg: "24px",
  xl: "36px",
  xxl: "54px",
} as const;

export const spacing = {
  none: "0",
  s1: "4px",
  s2: "8px",
  s3: "12px",
  s4: "16px",
  s5: "20px",
  s6: "24px",
  s7: "28px",
  s8: "32px",
  s9: "36px",
  s10: "40px",
  s11: "44px",
  s12: "48px",
  s13: "52px",
  s14: "56px",
  s15: "60px",
  s16: "64px",
  s17: "68px",
} as const;
