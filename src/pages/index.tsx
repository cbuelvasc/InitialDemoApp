import Link from "next/link";
import MainLayout from "../../components/layouts/MainLayout";

export default function Home() {
  return (
    <>
      <MainLayout>
        <div className={"description"}>
          <p>
            Ir a About
            <Link href="/about">
              <code className={"code"}>src/pages/index.tsx</code>
            </Link>
          </p>
        </div>
      </MainLayout>
    </>
  );
}
