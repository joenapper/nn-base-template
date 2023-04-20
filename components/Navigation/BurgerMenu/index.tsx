import { Menu, TopLine, MidLine, BtmLine } from "./styles";
import type { BurgerMenuProps } from "./types";

const BurgerMenu = ({ navActive, setNavActive }: BurgerMenuProps) => {
  return (
    <Menu onClick={() => setNavActive(!navActive)}>
      <TopLine navActive={navActive} />
      <MidLine navActive={navActive} />
      <BtmLine navActive={navActive} />
    </Menu>
  );
};

export default BurgerMenu;
