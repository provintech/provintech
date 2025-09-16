import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle, Clock, TrendingUp, Activity } from "lucide-react"

export default function Authenticity() {
  const liveChecks = [
    { id: 1, part: "Turbine Blade TB-300", status: "Checking", progress: 65 },
    { id: 2, part: "Valve Assembly VA-150", status: "Verified", confidence: 97 },
    { id: 3, part: "Pump Seal PS-200", status: "Suspicious", confidence: 23 },
    { id: 4, part: "Control Unit CU-400", status: "Checking", progress: 30 },
  ]

  const realtimeMetrics = [
    { label: "Active Checks", value: "24", trend: "+12%" },
    { label: "Avg Check Time", value: "2.3s", trend: "-8%" },
    { label: "Success Rate", value: "94.2%", trend: "+1.5%" },
    { label: "Queue Length", value: "7", trend: "-15%" },
  ]

  const suspiciousPatterns = [
    { 
      pattern: "Unusual serial number format", 
      occurrences: 5, 
      severity: "Medium",
      description: "Serial numbers don't match manufacturer standards"
    },
    { 
      pattern: "Inconsistent material properties", 
      occurrences: 3, 
      severity: "High",
      description: "Material analysis shows unexpected composition"
    },
    { 
      pattern: "Anomalous manufacturing marks", 
      occurrences: 8, 
      severity: "Low",
      description: "Manufacturing marks appear irregular or missing"
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <CheckCircle className="w-8 h-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">Real-Time Authenticity Checks</h1>
          <p className="text-muted-foreground">
            Continuous monitoring and instant verification of industrial parts
          </p>
        </div>
      </div>

      {/* Real-time Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {realtimeMetrics.map((metric, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
                <p className="text-2xl font-bold">{metric.value}</p>
                <p className={`text-sm ${metric.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {metric.trend}
                </p>
              </div>
              <Activity className="w-8 h-8 text-primary animate-pulse" />
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Live Authenticity Checks */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Live Authenticity Checks</h2>
            <Badge variant="secondary" className="animate-pulse">
              <Activity className="w-3 h-3 mr-1" />
              Live
            </Badge>
          </div>
          <div className="space-y-4">
            {liveChecks.map((check) => (
              <div key={check.id} className="p-4 rounded-lg border bg-muted/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{check.part}</span>
                  {check.status === "Checking" ? (
                    <Badge variant="outline">
                      <Clock className="w-3 h-3 mr-1 animate-spin" />
                      Checking
                    </Badge>
                  ) : check.status === "Verified" ? (
                    <Badge variant="secondary">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  ) : (
                    <Badge variant="destructive">
                      <AlertTriangle className="w-3 h-3 mr-1" />
                      Suspicious
                    </Badge>
                  )}
                </div>
                {check.status === "Checking" ? (
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="gradient-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${check.progress}%` }}
                    />
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Confidence: {check.confidence}%
                  </p>
                )}
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4">
            View All Active Checks
          </Button>
        </Card>

        {/* Suspicious Patterns */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Detected Patterns</h2>
          <div className="space-y-4">
            {suspiciousPatterns.map((pattern, index) => (
              <div key={index} className="p-4 rounded-lg border">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{pattern.pattern}</span>
                  <Badge 
                    variant={
                      pattern.severity === "High" 
                        ? "destructive" 
                        : pattern.severity === "Medium" 
                        ? "secondary" 
                        : "outline"
                    }
                  >
                    {pattern.severity}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {pattern.description}
                </p>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-orange-500" />
                  <span className="text-sm">{pattern.occurrences} occurrences today</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Authenticity Trends */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Authenticity Trends</h2>
        <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <TrendingUp className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
            <p className="text-muted-foreground">Real-time analytics chart would be displayed here</p>
          </div>
        </div>
      </Card>
    </div>
  )
}