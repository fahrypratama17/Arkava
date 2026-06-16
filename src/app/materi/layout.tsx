import ArkavaHeader from "@/shared/components/ArkavaHeader";
import Footer from "@/shared/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <ArkavaHeader />
      </header>
      <main className="flex min-h-full flex-col">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
