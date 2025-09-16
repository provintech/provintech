import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plug, Key, Activity, Code, Globe, Shield } from "lucide-react"

export default function APIIntegration() {
  const apiEndpoints = [
    { 
      method: "POST", 
      endpoint: "/api/v1/verify", 
      description: "Verify a single part",
      usage: "1.2k/day",
      status: "Active"
    },
    { 
      method: "POST", 
      endpoint: "/api/v1/batch-verify", 
      description: "Batch verification of multiple parts",
      usage: "340/day",
      status: "Active"
    },
    { 
      method: "GET", 
      endpoint: "/api/v1/status/{id}", 
      description: "Get verification status",
      usage: "890/day",
      status: "Active"
    },
    { 
      method: "GET", 
      endpoint: "/api/v1/reports", 
      description: "Retrieve verification reports",
      usage: "156/day",
      status: "Active"
    },
  ]

  const apiKeys = [
    { 
      name: "Production Key", 
      key: "pk_live_••••••••••••3847", 
      created: "Jan 1, 2024",
      lastUsed: "2 mins ago",
      status: "Active"
    },
    { 
      name: "Staging Key", 
      key: "pk_test_••••••••••••9284", 
      created: "Dec 15, 2023",
      lastUsed: "1 hour ago",
      status: "Active"
    },
    { 
      name: "Development Key", 
      key: "pk_dev_••••••••••••1293", 
      created: "Nov 20, 2023",
      lastUsed: "3 days ago",
      status: "Inactive"
    },
  ]

  const webhooks = [
    { 
      url: "https://api.example.com/webhook", 
      events: ["verification.completed", "verification.failed"],
      status: "Active",
      lastTriggered: "5 mins ago"
    },
    { 
      url: "https://alerts.company.com/hook", 
      events: ["alert.high_priority"],
      status: "Active",
      lastTriggered: "2 hours ago"
    },
  ]

  const apiMetrics = [
    { label: "Daily Requests", value: "2.8k", change: "+12%" },
    { label: "Response Time", value: "145ms", change: "-23ms" },
    { label: "Success Rate", value: "99.7%", change: "+0.1%" },
    { label: "Rate Limit", value: "5k/hour", change: "0" },
  ]

  const codeExample = `curl -X POST https://api.provintech.com/v1/verify \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "part_number": "HP-2500",
    "serial_number": "SN123456789",
    "manufacturer": "ProCorp Industries"
  }'`

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Plug className="w-8 h-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">API Integration</h1>
          <p className="text-muted-foreground">
            Seamless integration with your existing systems and workflows
          </p>
        </div>
      </div>

      {/* API Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {apiMetrics.map((metric, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
                <p className="text-2xl font-bold">{metric.value}</p>
                <p className={`text-sm ${metric.change.startsWith('+') ? 'text-green-600' : metric.change.startsWith('-') ? 'text-red-600' : 'text-muted-foreground'}`}>
                  {metric.change}
                </p>
              </div>
              <Activity className="w-8 h-8 text-primary" />
            </div>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="endpoints" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
          <TabsTrigger value="keys">API Keys</TabsTrigger>
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
          <TabsTrigger value="docs">Documentation</TabsTrigger>
          <TabsTrigger value="testing">Testing</TabsTrigger>
        </TabsList>

        <TabsContent value="endpoints" className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">API Endpoints</h2>
            <div className="space-y-4">
              {apiEndpoints.map((endpoint, index) => (
                <div key={index} className="p-4 rounded-lg border bg-muted/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Badge 
                        variant={endpoint.method === "POST" ? "secondary" : "outline"}
                        className={endpoint.method === "POST" ? "bg-green-100 text-green-800" : ""}
                      >
                        {endpoint.method}
                      </Badge>
                      <code className="font-mono text-sm">{endpoint.endpoint}</code>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{endpoint.usage}</span>
                      <Badge variant="secondary">{endpoint.status}</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{endpoint.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="keys" className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">API Keys</h2>
              <Button variant="premium">
                <Key className="w-4 h-4 mr-2" />
                Generate New Key
              </Button>
            </div>
            <div className="space-y-4">
              {apiKeys.map((key, index) => (
                <div key={index} className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Key className="w-5 h-5 text-primary" />
                      <div>
                        <h3 className="font-medium">{key.name}</h3>
                        <code className="text-sm text-muted-foreground font-mono">{key.key}</code>
                      </div>
                    </div>
                    <Badge variant={key.status === "Active" ? "secondary" : "outline"}>
                      {key.status}
                    </Badge>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Created</p>
                      <p className="font-medium">{key.created}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Last Used</p>
                      <p className="font-medium">{key.lastUsed}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="webhooks" className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Webhooks</h2>
              <Button variant="outline">
                <Globe className="w-4 h-4 mr-2" />
                Add Webhook
              </Button>
            </div>
            <div className="space-y-4">
              {webhooks.map((webhook, index) => (
                <div key={index} className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-primary" />
                      <div>
                        <code className="text-sm font-mono">{webhook.url}</code>
                        <p className="text-xs text-muted-foreground">
                          Events: {webhook.events.join(", ")}
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary">{webhook.status}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Last triggered: {webhook.lastTriggered}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="docs" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Start</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Authentication</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Include your API key in the Authorization header:
                  </p>
                  <code className="block p-2 bg-muted rounded text-xs">
                    Authorization: Bearer YOUR_API_KEY
                  </code>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Base URL</h3>
                  <code className="block p-2 bg-muted rounded text-xs">
                    https://api.provintech.com/v1
                  </code>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Example Request</h2>
              <pre className="text-xs bg-muted p-4 rounded overflow-x-auto">
                <code>{codeExample}</code>
              </pre>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="testing" className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">API Testing Console</h2>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="endpoint">Endpoint</Label>
                  <Input id="endpoint" value="/api/v1/verify" readOnly />
                </div>
                <div>
                  <Label htmlFor="method">Method</Label>
                  <Input id="method" value="POST" readOnly />
                </div>
              </div>
              <div>
                <Label htmlFor="payload">Request Payload</Label>
                <textarea 
                  id="payload"
                  className="w-full h-32 p-3 border rounded-md bg-muted font-mono text-sm"
                  defaultValue={`{
  "part_number": "HP-2500",
  "serial_number": "SN123456789",
  "manufacturer": "ProCorp Industries"
}`}
                />
              </div>
              <Button variant="premium" className="w-full">
                <Code className="w-4 h-4 mr-2" />
                Send Test Request
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}