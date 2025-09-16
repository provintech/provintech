import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Download, Bell, TrendingUp, AlertTriangle, Calendar } from "lucide-react"

export default function Reports() {
  const reports = [
    { 
      id: "RPT-001", 
      name: "Daily Verification Summary", 
      type: "Automated", 
      frequency: "Daily",
      lastGenerated: "Today 6:00 AM",
      status: "Ready"
    },
    { 
      id: "RPT-002", 
      name: "Weekly Supply Chain Health", 
      type: "Scheduled", 
      frequency: "Weekly",
      lastGenerated: "Monday 8:00 AM",
      status: "Ready"
    },
    { 
      id: "RPT-003", 
      name: "Monthly Authenticity Trends", 
      type: "Automated", 
      frequency: "Monthly",
      lastGenerated: "Jan 1, 2024",
      status: "Generating"
    },
  ]

  const alerts = [
    { 
      id: "ALT-001", 
      type: "Quality Alert", 
      severity: "High", 
      message: "Unusual spike in failed verifications",
      time: "15 mins ago",
      status: "Active"
    },
    { 
      id: "ALT-002", 
      type: "Supply Chain", 
      severity: "Medium", 
      message: "Delay in shipment SH-002",
      time: "1 hour ago",
      status: "Acknowledged"
    },
    { 
      id: "ALT-003", 
      type: "System Alert", 
      severity: "Low", 
      message: "Scheduled maintenance in 2 hours",
      time: "2 hours ago",
      status: "Resolved"
    },
  ]

  const kpiMetrics = [
    { name: "Verification Success Rate", value: "98.7%", trend: "+0.3%", target: "98%" },
    { name: "Average Response Time", value: "2.1s", trend: "-0.2s", target: "3.0s" },
    { name: "Parts Processed", value: "12,450", trend: "+5.2%", target: "12,000" },
    { name: "Alert Resolution Time", value: "4.2m", trend: "-1.1m", target: "5.0m" },
  ]

  const scheduledReports = [
    { 
      name: "Executive Dashboard", 
      recipients: ["CEO", "COO"], 
      schedule: "Monday 9:00 AM",
      format: "PDF"
    },
    { 
      name: "Operations Report", 
      recipients: ["Operations Team"], 
      schedule: "Daily 6:00 AM",
      format: "Excel"
    },
    { 
      name: "Quality Metrics", 
      recipients: ["Quality Team"], 
      schedule: "Weekly Friday",
      format: "PDF"
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <FileText className="w-8 h-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">Reporting & Alerts</h1>
          <p className="text-muted-foreground">
            Comprehensive analytics, automated reporting, and intelligent alerting
          </p>
        </div>
      </div>

      <Tabs defaultValue="reports" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
          <TabsTrigger value="kpis">KPIs</TabsTrigger>
          <TabsTrigger value="schedule">Scheduling</TabsTrigger>
        </TabsList>

        <TabsContent value="reports" className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Generated Reports</h2>
              <Button variant="premium">
                <FileText className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
            </div>
            <div className="space-y-4">
              {reports.map((report) => (
                <div key={report.id} className="p-4 rounded-lg border bg-muted/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-primary" />
                      <div>
                        <h3 className="font-medium">{report.name}</h3>
                        <p className="text-sm text-muted-foreground">{report.id}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{report.type}</Badge>
                      <Badge 
                        variant={report.status === "Ready" ? "secondary" : "outline"}
                      >
                        {report.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm mb-3">
                    <div>
                      <p className="text-muted-foreground">Frequency</p>
                      <p className="font-medium">{report.frequency}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Last Generated</p>
                      <p className="font-medium">{report.lastGenerated}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Download className="w-3 h-3 mr-1" />
                        Download
                      </Button>
                      <Button size="sm" variant="outline">View</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Active Alerts</h2>
              <Button variant="outline">
                <Bell className="w-4 h-4 mr-2" />
                Configure Alerts
              </Button>
            </div>
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div key={alert.id} className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className={`w-5 h-5 ${
                        alert.severity === "High" 
                          ? "text-red-500" 
                          : alert.severity === "Medium" 
                          ? "text-orange-500" 
                          : "text-yellow-500"
                      }`} />
                      <div>
                        <h3 className="font-medium">{alert.type}</h3>
                        <p className="text-sm text-muted-foreground">{alert.id}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={
                          alert.severity === "High" 
                            ? "destructive" 
                            : alert.severity === "Medium" 
                            ? "secondary" 
                            : "outline"
                        }
                      >
                        {alert.severity}
                      </Badge>
                      <Badge 
                        variant={
                          alert.status === "Active" 
                            ? "destructive" 
                            : alert.status === "Acknowledged" 
                            ? "secondary" 
                            : "outline"
                        }
                      >
                        {alert.status}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm mb-2">{alert.message}</p>
                  <p className="text-xs text-muted-foreground">{alert.time}</p>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="kpis" className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Key Performance Indicators</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {kpiMetrics.map((metric, index) => (
                <div key={index} className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">{metric.name}</h3>
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-2xl font-bold">{metric.value}</span>
                    <span className={`text-sm ${metric.trend.includes('+') || metric.trend.includes('-') && !metric.trend.includes('-') ? 'text-green-600' : 'text-red-600'}`}>
                      {metric.trend}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Target: {metric.target}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Scheduled Reports</h2>
              <Button variant="outline">
                <Calendar className="w-4 h-4 mr-2" />
                Add Schedule
              </Button>
            </div>
            <div className="space-y-4">
              {scheduledReports.map((schedule, index) => (
                <div key={index} className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <h3 className="font-medium">{schedule.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {schedule.recipients.join(", ")}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline">{schedule.format}</Badge>
                  </div>
                  <div className="text-sm">
                    <p className="text-muted-foreground">Schedule: {schedule.schedule}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}