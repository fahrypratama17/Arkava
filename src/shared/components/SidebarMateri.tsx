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
                    <p className="w-6 text-[8px] font-bold">HTML</p>
                    <p className="text-sm">HTML Fundamentals</p>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="" className="flex items-center gap-2">
                    <p className="w-6 text-[8px] font-bold">CSS</p>
                    <p className="text-sm">Modern CSS</p>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="" className="flex items-center gap-2">
                    <p className="w-6 text-[8px] font-bold">JS</p>
                    <p className="text-sm">JavaScript Logic</p>
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
          <SidebarGroupContent className="bg-blue-550 flex flex-col gap-3 rounded-[12px] p-4">
            <p className="text-xs font-bold text-white/80 uppercase">
              Progress Belajar
            </p>
            <p className="text-3xl font-bold text-white uppercase">
              35% Selesai
            </p>
            <div className="my-1 h-2 rounded-full bg-[#03045E]">
              <div className="h-full w-[35%] rounded-full bg-white" />
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
