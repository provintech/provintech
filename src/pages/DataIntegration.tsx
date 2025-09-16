import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Database, Plug, RefreshCw, CheckCircle, AlertTriangle, Activity } from "lucide-react"

export default function DataIntegration() {
  const dataSources = [
    { 
      name: "Manufacturing ERP", 
      type: "Database", 
      status: "Connected", 
      lastSync: "2 mins ago",
      records: "2.3M"
    },
    { 
      name: "Quality Control API", 
      type: "REST API", 
      status: "Connected", 
      lastSync: "5 mins ago",
      records: "450K"
    },
    { 
      name: "Supplier Portal", 
      type: "Web Service", 
      status: "Error", 
      lastSync: "2 hours ago",
      records: "1.8M"
    },
    { 
      name: "IoT Sensors", 
      type: "Real-time Stream", 
      status: "Connected", 
      lastSync: "Live",
      records: "15.2M"
    },
  ]

  const syncJobs = [
    { 
      id: "JOB-001", 
      source: "Manufacturing ERP", 
      status: "Running", 
      progress: 75,
      startTime: "10:30 AM",
      estimatedCompletion: "11:15 AM"
    },
    { 
      id: "JOB-002", 
      source: "Quality Control API", 
      status: "Completed", 
      progress: 100,
      startTime: "09:45 AM",
      estimatedCompletion: "10:20 AM"
    },
    { 
      id: "JOB-003", 
      source: "Supplier Portal", 
      status: "Failed", 
      progress: 0,
      startTime: "08:30 AM",
      estimatedCompletion: "N/A"
    },
  ]

  const dataMetrics = [
    { label: "Total Records", value: "19.75M", change: "+2.3%" },
    { label: "Active Sources", value: "12", change: "+1" },
    { label: "Daily Syncs", value: "24", change: "0%" },
    { label: "Data Quality", value: "98.7%", change: "+0.5%" },
  ]

  const dataMapping = [
    { source: "Part Number", target: "product_id", status: "Mapped", quality: "High" },
    { source: "Serial Number", target: "serial_no", status: "Mapped", quality: "High" },
    { source: "Manufacture Date", target: "mfg_date", status: "Mapped", quality: "Medium" },
    { source: "Quality Score", target: "qa_score", status: "Unmapped", quality: "Low" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Database className="w-8 h-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">Multi-Source Data Integration</h1>
          <p className="text-muted-foreground">
            Unified data management and synchronization across all systems
          </p>
        </div>
      </div>

      {/* Data Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {dataMetrics.map((metric, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
                <p className="text-2xl font-bold">{metric.value}</p>
                <p className={`text-sm ${metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {metric.change}
                </p>
              </div>
              <Database className="w-8 h-8 text-primary" />
            </div>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="sources" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="sources">Data Sources</TabsTrigger>
          <TabsTrigger value="sync">Sync Jobs</TabsTrigger>
          <TabsTrigger value="mapping">Data Mapping</TabsTrigger>
          <TabsTrigger value="quality">Data Quality</TabsTrigger>
        </TabsList>

        <TabsContent value="sources" className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Connected Data Sources</h2>
              <Button variant="outline">
                <Plug className="w-4 h-4 mr-2" />
                Add Source
              </Button>
            </div>
            <div className="space-y-4">
              {dataSources.map((source, index) => (
                <div key={index} className="p-4 rounded-lg border bg-muted/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Database className="w-5 h-5 text-primary" />
                      <div>
                        <h3 className="font-medium">{source.name}</h3>
                        <p className="text-sm text-muted-foreground">{source.type}</p>
                      </div>
                    </div>
                    <Badge 
                      variant={source.status === "Connected" ? "secondary" : "destructive"}
                    >
                      {source.status === "Connected" && <CheckCircle className="w-3 h-3 mr-1" />}
                      {source.status === "Error" && <AlertTriangle className="w-3 h-3 mr-1" />}
                      {source.status}
                    </Badge>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Last Sync</p>
                      <p className="font-medium">{source.lastSync}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Records</p>
                      <p className="font-medium">{source.records}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="sync" className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Synchronization Jobs</h2>
              <Button variant="premium">
                <RefreshCw className="w-4 h-4 mr-2" />
                Start Sync
              </Button>
            </div>
            <div className="space-y-4">
              {syncJobs.map((job) => (
                <div key={job.id} className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Activity className="w-5 h-5 text-primary" />
                      <div>
                        <h3 className="font-medium">{job.id}</h3>
                        <p className="text-sm text-muted-foreground">{job.source}</p>
                      </div>
                    </div>
                    <Badge 
                      variant={
                        job.status === "Completed" 
                          ? "secondary" 
                          : job.status === "Failed" 
                          ? "destructive" 
                          : "outline"
                      }
                    >
                      {job.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{job.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="gradient-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${job.progress}%` }}
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Started</p>
                        <p className="font-medium">{job.startTime}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">ETA</p>
                        <p className="font-medium">{job.estimatedCompletion}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="mapping" className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Data Field Mapping</h2>
            <div className="space-y-4">
              {dataMapping.map((mapping, index) => (
                <div key={index} className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="text-sm">
                        <p className="font-medium">{mapping.source}</p>
                        <p className="text-muted-foreground">→ {mapping.target}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={mapping.status === "Mapped" ? "secondary" : "outline"}
                      >
                        {mapping.status}
                      </Badge>
                      <Badge 
                        variant={
                          mapping.quality === "High" 
                            ? "secondary" 
                            : mapping.quality === "Medium" 
                            ? "outline" 
                            : "destructive"
                        }
                      >
                        {mapping.quality}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="quality" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Data Quality Overview</h2>
              <div className="h-48 bg-muted/30 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Data quality metrics chart</p>
              </div>
            </Card>
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Data Completeness</h2>
              <div className="h-48 bg-muted/30 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Data completeness analysis</p>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}