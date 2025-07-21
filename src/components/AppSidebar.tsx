import { Home, Hash, Bell, Mail, Bookmark, User, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "首页", url: "#", icon: Home },
  { title: "话题", url: "#", icon: Hash },
  { title: "通知", url: "#", icon: Bell },
  { title: "私信", url: "#", icon: Mail },
  { title: "收藏", url: "#", icon: Bookmark },
  { title: "个人资料", url: "#", icon: User },
  { title: "设置", url: "#", icon: Settings },
];

export function AppSidebar() {
  return (
    <Sidebar className="!bg-gray-900 border-gray-700">
      <SidebarHeader className="p-4 bg-gray-900">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">W</span>
          </div>
          <span className="text-xl font-bold text-white">话题原地</span>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-gray-900">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className="text-gray-300 hover:text-white hover:bg-gray-800 data-[active=true]:bg-gray-800 data-[active=true]:text-white"
                  >
                    <a href={item.url} className="flex items-center space-x-3 p-3">
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}