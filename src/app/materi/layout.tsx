import ArkavaHeader from "@/shared/components/ArkavaHeader";
import Footer from "@/shared/components/Footer";
import { SidebarMateri } from "@/shared/components/SidebarMateri";
import { SidebarProvider } from "@/shared/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <ArkavaHeader />
      </header>
      <SidebarProvider>
        <SidebarMateri />

        <main className="flex min-h-full flex-col p-12">{children}</main>
      </SidebarProvider>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
