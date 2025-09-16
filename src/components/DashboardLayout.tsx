import { Outlet } from "react-router-dom"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { DashboardSidebar } from "./DashboardSidebar"
import { Button } from "@/components/ui/button"
import { Bell, Search, User } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"

export function DashboardLayout() {
  const { user, logout } = useAuth()
  
  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error('Logout error:', error)
    }
  }
  
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full max-w-full overflow-hidden bg-background">
        <DashboardSidebar />
        
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top Header */}
          <header className="h-16 border-b border-border bg-card flex items-center justify-between px-4 lg:px-6 shadow-sm shrink-0">
            <div className="flex items-center gap-4 min-w-0">
              <SidebarTrigger />
              <h1 className="text-lg lg:text-xl font-semibold hidden sm:block truncate">
                Industrial Parts Verification Platform
              </h1>
            </div>
            
            <div className="flex items-center gap-2 lg:gap-4 shrink-0">
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <Search className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleLogout}>
                <User className="w-4 h-4" />
              </Button>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-4 lg:p-6 overflow-auto min-w-0">
            <div className="max-w-full">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}