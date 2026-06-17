import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/components/ui/sidebar";
import Link from "next/link";

export function SidebarMateri() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent className="flex flex-col gap-4">
        <SidebarGroup className="flex flex-col gap-4">
          <SidebarGroupLabel className="text-lg font-bold uppercase">
            Kategori Materi
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-3 px-4">
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    href=""
                    className="hover:bg-blue-550 flex items-center gap-2"
                  >
                    <p
                      className="w-5 text-[8px] font-bold"
                      style={{ fontSize: "8px", width: "24px" }}
                    >
                      HTML
                    </p>
                    <p style={{ fontSize: "14px" }}>HTML Fundamentals</p>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="" className="flex items-center gap-2">
                    <p
                      className="w-5 text-[8px] font-bold"
                      style={{ fontSize: "8px", width: "24px" }}
                    >
                      CSS
                    </p>
                    <p style={{ fontSize: "14px" }}>Modern CSS</p>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="" className="flex items-center gap-2">
                    <p
                      className="font-bold"
                      style={{ fontSize: "8px", width: "24px" }}
                    >
                      JS
                    </p>
                    <p style={{ fontSize: "14px" }}>JavaScript Logic</p>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="flex flex-col gap-4">
          <SidebarGroupLabel className="text-lg font-bold uppercase">
            Level Kesulitan
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-3 px-4">
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="" className="flex items-center gap-4">
                    <input type="checkbox" />
                    <p>Pemula</p>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="" className="flex items-center gap-4">
                    <input type="checkbox" />
                    <p>Menengah</p>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="" className="flex items-center gap-4">
                    <input type="checkbox" />
                    <p>Ahli</p>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent
            style={{ borderRadius: "12px" }}
            className="bg-blue-550 flex flex-col gap-3 rounded-[12px]! p-4"
          >
            <p
              style={{ color: "#D3E0FB" }}
              className="text-xs font-bold text-red-500 uppercase"
            >
              Progress Belajar
            </p>
            <p className="text-3xl font-bold text-white uppercase">
              35% Selesai
            </p>
            <div
              style={{ background: "#03045E", margin: "4px 0 4px 0" }}
              className="h-2 rounded-full"
            >
              <div className="h-full w-[35%] rounded-full bg-white" />
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
