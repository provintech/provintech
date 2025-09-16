import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle, TruckIcon, Database, FileText, Plug, TrendingUp, AlertTriangle } from "lucide-react"

export default function Dashboard() {
  const metrics = [
    { title: "Parts Verified Today", value: "1,247", change: "+12%", icon: Shield, color: "text-primary" },
    { title: "Authenticity Rate", value: "98.7%", change: "+0.3%", icon: CheckCircle, color: "text-green-600" },
    { title: "Supply Chain Issues", value: "3", change: "-67%", icon: AlertTriangle, color: "text-orange-500" },
    { title: "API Calls", value: "45.2K", change: "+8%", icon: Plug, color: "text-blue-600" },
  ]

  const recentActivities = [
    { id: 1, action: "Part verification completed", part: "Hydraulic Pump HP-2500", status: "Verified", time: "2 mins ago" },
    { id: 2, action: "Authenticity check failed", part: "Bearing Assembly BA-150", status: "Failed", time: "15 mins ago" },
    { id: 3, action: "Supply chain alert triggered", part: "Motor Controller MC-400", status: "Alert", time: "1 hour ago" },
    { id: 4, action: "Data integration completed", part: "Sensor Module SM-200", status: "Success", time: "2 hours ago" },
  ]

  return (
    <div className="space-y-6 max-w-full">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <h1 className="text-2xl md:text-3xl font-bold gradient-primary bg-clip-text text-transparent">
            Welcome to ProvinTech
          </h1>
          <p className="text-muted-foreground">
            AI-Powered Industrial Parts Verification Platform
          </p>
        </div>
        <Button variant="premium" className="w-full md:w-fit shrink-0">
          Start Verification
        </Button>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="p-4 md:p-6 shadow-elegant hover:shadow-glow transition-smooth">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-muted-foreground truncate">{metric.title}</p>
                <p className="text-xl md:text-2xl font-bold truncate">{metric.value}</p>
                <p className={`text-sm ${metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'} truncate`}>
                  {metric.change} from yesterday
                </p>
              </div>
              <metric.icon className={`w-6 h-6 md:w-8 md:h-8 ${metric.color} shrink-0 ml-2`} />
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="p-4 md:p-6">
        <h2 className="text-lg md:text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <Button variant="outline" className="h-16 md:h-20 flex-col gap-2 text-xs">
            <Shield className="w-4 h-4 md:w-6 md:h-6" />
            <span className="text-xs">Verify Part</span>
          </Button>
          <Button variant="outline" className="h-16 md:h-20 flex-col gap-2 text-xs">
            <CheckCircle className="w-4 h-4 md:w-6 md:h-6" />
            <span className="text-xs">Check Auth</span>
          </Button>
          <Button variant="outline" className="h-16 md:h-20 flex-col gap-2 text-xs">
            <TruckIcon className="w-4 h-4 md:w-6 md:h-6" />
            <span className="text-xs">Track Supply</span>
          </Button>
          <Button variant="outline" className="h-16 md:h-20 flex-col gap-2 text-xs">
            <Database className="w-4 h-4 md:w-6 md:h-6" />
            <span className="text-xs">Sync Data</span>
          </Button>
          <Button variant="outline" className="h-16 md:h-20 flex-col gap-2 text-xs">
            <FileText className="w-4 h-4 md:w-6 md:h-6" />
            <span className="text-xs">View Reports</span>
          </Button>
          <Button variant="outline" className="h-16 md:h-20 flex-col gap-2 text-xs">
            <Plug className="w-4 h-4 md:w-6 md:h-6" />
            <span className="text-xs">API Access</span>
          </Button>
        </div>
      </Card>

      {/* Recent Activity */}
      <Card className="p-4 md:p-6">
        <h2 className="text-lg md:text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg bg-muted/30 gap-2">
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{activity.action}</p>
                <p className="text-sm text-muted-foreground truncate">{activity.part}</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                  activity.status === 'Verified' || activity.status === 'Success' 
                    ? 'bg-green-100 text-green-800' 
                    : activity.status === 'Failed' 
                    ? 'bg-red-100 text-red-800'
                    : 'bg-orange-100 text-orange-800'
                }`}>
                  {activity.status}
                </span>
                <span className="text-sm text-muted-foreground whitespace-nowrap">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}