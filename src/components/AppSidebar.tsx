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
  { title: "首页", url: "#", icon: Home, notificationCount: 0 },
  { title: "话题", url: "#", icon: Hash, notificationCount: 3 },
  { title: "通知", url: "#", icon: Bell, notificationCount: 12 },
  { title: "私信", url: "#", icon: Mail, notificationCount: 5 },
  { title: "收藏", url: "#", icon: Bookmark, notificationCount: 0 },
  { title: "个人资料", url: "#", icon: User, notificationCount: 1 },
  { title: "设置", url: "#", icon: Settings, notificationCount: 0 },
];

export function AppSidebar() {
  return (
    <Sidebar className="!bg-gray-900 border-gray-700">
      <SidebarHeader className="p-4 bg-gray-900">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">W</span>
          </div>
          <span className="text-xl font-bold text-white">话题社区</span>
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
                    <a href={item.url} className="flex items-center space-x-3 p-3 relative">
                      <div className="relative">
                        <item.icon className="w-5 h-5" />
                        {item.notificationCount > 0 && (
                          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full min-w-[18px] h-[18px] flex items-center justify-center">
                            {item.notificationCount > 99 ? '99+' : item.notificationCount}
                          </div>
                        )}
                      </div>
                      <span>{item.title}</span>
                      {item.notificationCount > 0 && (
                        <div className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] h-5 flex items-center justify-center">
                          {item.notificationCount > 99 ? '99+' : item.notificationCount}
                        </div>
                      )}
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