import type { PropsWithChildren } from "react";

export type LayoutProps = PropsWithChildren<{
  title: string;
  keywords: string;
  description: string;
}>;
