import Link from "next/link";
import MainLayout from "../../../components/layouts/MainLayout";

export default function Pricing() {
  return (
    <>
      <MainLayout>
        <div className={"description"}>
          <p>
            Ir a Home
            <Link href="/">
              <code className={"code"}>src/pages/index.tsx</code>
            </Link>
          </p>
        </div>
      </MainLayout>
    </>
  );
}
