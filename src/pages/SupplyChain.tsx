import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TruckIcon, MapPin, AlertTriangle, CheckCircle, Package, Clock } from "lucide-react"

export default function SupplyChain() {
  const shipments = [
    { 
      id: "SH-001", 
      origin: "Detroit, MI", 
      destination: "Houston, TX", 
      status: "In Transit", 
      parts: 45, 
      eta: "2024-01-16 14:30",
      risk: "Low" 
    },
    { 
      id: "SH-002", 
      origin: "Chicago, IL", 
      destination: "Phoenix, AZ", 
      status: "Delayed", 
      parts: 23, 
      eta: "2024-01-17 09:15",
      risk: "Medium" 
    },
    { 
      id: "SH-003", 
      origin: "Atlanta, GA", 
      destination: "Denver, CO", 
      status: "Delivered", 
      parts: 67, 
      eta: "2024-01-15 11:20",
      risk: "Low" 
    },
  ]

  const suppliers = [
    { name: "ProCorp Industries", reliability: 98, deliveries: 245, issues: 2 },
    { name: "TechMax Solutions", reliability: 94, deliveries: 189, issues: 7 },
    { name: "Industrial Parts Co", reliability: 91, deliveries: 156, issues: 12 },
    { name: "Global Components", reliability: 96, deliveries: 203, issues: 4 },
  ]

  const riskAlerts = [
    { 
      type: "Weather Delay", 
      severity: "Medium", 
      location: "Denver, CO", 
      impact: "3 shipments affected",
      time: "2 hours ago"
    },
    { 
      type: "Supplier Issue", 
      severity: "High", 
      location: "Phoenix, AZ", 
      impact: "Quality concerns reported",
      time: "4 hours ago"
    },
    { 
      type: "Route Optimization", 
      severity: "Low", 
      location: "Chicago, IL", 
      impact: "Fuel cost savings available",
      time: "6 hours ago"
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <TruckIcon className="w-8 h-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">Supply Chain Monitoring</h1>
          <p className="text-muted-foreground">
            Real-time tracking and risk management for industrial parts supply chain
          </p>
        </div>
      </div>

      <Tabs defaultValue="shipments" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="shipments">Shipments</TabsTrigger>
          <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
          <TabsTrigger value="risks">Risk Alerts</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="shipments" className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Active Shipments</h2>
            <div className="space-y-4">
              {shipments.map((shipment) => (
                <div key={shipment.id} className="p-4 rounded-lg border bg-muted/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Package className="w-5 h-5 text-primary" />
                      <span className="font-medium">{shipment.id}</span>
                      <Badge 
                        variant={
                          shipment.status === "Delivered" 
                            ? "secondary" 
                            : shipment.status === "Delayed" 
                            ? "destructive" 
                            : "outline"
                        }
                      >
                        {shipment.status}
                      </Badge>
                    </div>
                    <Badge 
                      variant={
                        shipment.risk === "Low" 
                          ? "secondary" 
                          : shipment.risk === "Medium" 
                          ? "secondary" 
                          : "destructive"
                      }
                    >
                      {shipment.risk} Risk
                    </Badge>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Route</p>
                      <p className="font-medium">{shipment.origin} → {shipment.destination}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Parts Count</p>
                      <p className="font-medium">{shipment.parts} items</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">ETA</p>
                      <p className="font-medium">{shipment.eta}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="suppliers" className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Supplier Performance</h2>
            <div className="space-y-4">
              {suppliers.map((supplier, index) => (
                <div key={index} className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium">{supplier.name}</h3>
                    <Badge variant="secondary">{supplier.reliability}% Reliable</Badge>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Total Deliveries</p>
                      <p className="font-medium">{supplier.deliveries}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Issues Reported</p>
                      <p className="font-medium">{supplier.issues}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Performance</p>
                      <div className="w-full bg-muted rounded-full h-2 mt-1">
                        <div 
                          className="gradient-primary h-2 rounded-full"
                          style={{ width: `${supplier.reliability}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="risks" className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Risk Alerts</h2>
            <div className="space-y-4">
              {riskAlerts.map((alert, index) => (
                <div key={index} className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className={`w-5 h-5 ${
                        alert.severity === "High" 
                          ? "text-red-500" 
                          : alert.severity === "Medium" 
                          ? "text-orange-500" 
                          : "text-yellow-500"
                      }`} />
                      <span className="font-medium">{alert.type}</span>
                    </div>
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
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{alert.location}</span>
                    </div>
                    <p className="text-muted-foreground">{alert.impact}</p>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{alert.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Supply Chain Health</h2>
              <div className="h-48 bg-muted/30 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Supply chain health metrics chart</p>
              </div>
            </Card>
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Delivery Performance</h2>
              <div className="h-48 bg-muted/30 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Delivery performance trends chart</p>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}