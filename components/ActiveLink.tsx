import { FC, PropsWithChildren } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import styles from "./ActiveLink.module.css";

interface Props {
  text: string;
  href: string;
}

export const ActiveLink: FC<PropsWithChildren<Props>> = ({ text, href }) => {
  const { asPath } = useRouter();
  return (
    <Link href={href} legacyBehavior>
      <a className={asPath === href ? styles.a : undefined}>{text}</a>
    </Link>
  );
};
