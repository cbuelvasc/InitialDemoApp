import { FC, PropsWithChildren } from "react";
import styles from "./DarkLayout.module.css";

export const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.main}>
      <h3>Dark Layout</h3>
      <div>{children}</div>
    </div>
  );
};
