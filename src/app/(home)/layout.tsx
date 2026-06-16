import Navbar from "@/shared/components/Navbar";
import Footer from "@/shared/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full">
        <Navbar />
      </nav>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
