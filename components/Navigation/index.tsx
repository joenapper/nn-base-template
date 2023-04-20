import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import BurgerMenu from "./BurgerMenu";
import { navItems } from "./config";
import { NavBarWrapper, NavBar, NavItems, NavItem } from "./styles";

const Navigation = () => {
  const [navActive, setNavActive] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const addBackground = () => setHasScrolled(window.scrollY > 10);
    window.addEventListener("scroll", addBackground);
    return () => window.removeEventListener("scroll", addBackground);
  }, []);

  const { pathname } = useRouter();

  return (
    <NavBarWrapper hasScrolled={hasScrolled}>
      <NavBar>
        <Link href="/">
          <Image src="vercel.svg" alt="Vercel logo" width={100} height={50} />
        </Link>

        <NavItems navActive={navActive}>
          {navItems.map(({ label, link }, key) => (
            <NavItem
              onClick={() => setNavActive(false)}
              key={key}
              isActiveLink={pathname === link}
            >
              <Link href={link}>{label}</Link>
            </NavItem>
          ))}
        </NavItems>

        <BurgerMenu navActive={navActive} setNavActive={setNavActive} />
      </NavBar>
    </NavBarWrapper>
  );
};

export default Navigation;
