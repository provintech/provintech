import { NavLink } from "react-router-dom"
import { 
  Shield, 
  CheckCircle, 
  TruckIcon, 
  Database, 
  FileText, 
  Plug,
  Home,
  Settings,
  LogOut
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import logo from '../../public/logo.svg'

const navigationItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "AI Parts Verification", url: "/verification", icon: Shield },
  { title: "Authenticity Checks", url: "/authenticity", icon: CheckCircle },
  { title: "Supply Chain Monitor", url: "/supply-chain", icon: TruckIcon },
  { title: "Data Integration", url: "/data-integration", icon: Database },
  { title: "Reports & Alerts", url: "/reports", icon: FileText },
  { title: "API Integration", url: "/api", icon: Plug },
]

export function DashboardSidebar() {
  const { state, isMobile } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <Sidebar className={cn(isCollapsed && !isMobile ? "w-16" : "w-64")} collapsible="icon">{/* Mobile-responsive sidebar */}
      <SidebarHeader className="border-b border-sidebar-border">
        <div className={cn("flex items-center gap-3 p-4", (isCollapsed && !isMobile) && "justify-center")}>
          
          {(!isCollapsed || isMobile) && (
            <img src={logo} alt="" style={{ backgroundColor: "white", borderRadius: "10px" }} />
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className={(isCollapsed && !isMobile) ? "sr-only" : ""}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <NavLink 
                    to={item.url} 
                    end={item.url === "/"}
                    className={({ isActive }) => cn(
                      "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                      isActive 
                        ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                        : "text-sidebar-foreground"
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                    {(!isCollapsed || isMobile) && <span className="truncate">{item.title}</span>}
                  </NavLink>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Settings className="w-4 h-4" />
              {(!isCollapsed || isMobile) && <span>Settings</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <LogOut className="w-4 h-4" />
              {(!isCollapsed || isMobile) && <span>Logout</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}