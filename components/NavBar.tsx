import { ActiveLink } from "./ActiveLink";
import styles from "./NavBar.module.css";

interface Menu {
  text: string;
  href: string;
}

const menuItems: Menu[] = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
  {
    text: "Contact",
    href: "/contact",
  },
];

export const NavBar = () => {
  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map(({ text, href }) => (
        <ActiveLink key={href} text={text} href={href} />
      ))}
    </nav>
  );
};
