export type BurgerMenuProps = {
  navActive: boolean;
  setNavActive: (item: boolean) => void;
};

export type LineProps = Pick<BurgerMenuProps, "navActive">;
