import type { ReactElement } from "react";
import Link from "next/link";

import { DarkLayout } from "../../components/layouts/DarkLayout";
import MainLayout from "../../components/layouts/MainLayout";

export default function About() {
  return (
    <>
      <div className={"description"}>
        <p>
          Ir a Home
          <Link href="/">
            <code className={"code"}>src/pages/index.tsx</code>
          </Link>
        </p>
      </div>
    </>
  );
}

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
