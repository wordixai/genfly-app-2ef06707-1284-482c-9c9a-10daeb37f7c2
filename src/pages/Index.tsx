import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import { PostFeed } from "@/components/PostFeed";
import { TrendingSidebar } from "@/components/TrendingSidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <SidebarProvider>
        <div className="flex min-h-screen">
          <AppSidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <div className="flex flex-1">
              <main className="flex-1 max-w-2xl mx-auto px-4 py-6">
                <PostFeed />
              </main>
              <aside className="hidden lg:block w-80 px-4 py-6">
                <TrendingSidebar />
              </aside>
            </div>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Index;