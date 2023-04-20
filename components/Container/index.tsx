import { Wrapper } from "./styles";
import type { ContainerProps } from "./types";

const Container = ({ as = "section", children }: ContainerProps) => {
  return <Wrapper as={as}>{children}</Wrapper>;
};

export default Container;
