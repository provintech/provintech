import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Upload, Search, CheckCircle, AlertTriangle, Clock } from "lucide-react"

export default function Verification() {
  const [partNumber, setPartNumber] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)

  const handleVerification = () => {
    setIsVerifying(true)
    // Simulate API call
    setTimeout(() => setIsVerifying(false), 2000)
  }

  const verificationHistory = [
    { id: 1, part: "Hydraulic Pump HP-2500", status: "Verified", confidence: 98, date: "2024-01-15" },
    { id: 2, part: "Bearing Assembly BA-150", status: "Suspicious", confidence: 45, date: "2024-01-15" },
    { id: 3, part: "Motor Controller MC-400", status: "Verified", confidence: 95, date: "2024-01-14" },
    { id: 4, part: "Sensor Module SM-200", status: "Verified", confidence: 99, date: "2024-01-14" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Shield className="w-8 h-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">AI-Powered Parts Verification</h1>
          <p className="text-muted-foreground">
            Advanced machine learning algorithms to verify industrial part authenticity
          </p>
        </div>
      </div>

      <Tabs defaultValue="verify" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="verify">Verify Part</TabsTrigger>
          <TabsTrigger value="batch">Batch Verification</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="verify" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Verification Form */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Single Part Verification</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="partNumber">Part Number</Label>
                  <Input
                    id="partNumber"
                    value={partNumber}
                    onChange={(e) => setPartNumber(e.target.value)}
                    placeholder="Enter part number (e.g., HP-2500)"
                  />
                </div>
                <div>
                  <Label htmlFor="upload">Upload Part Image (Optional)</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-smooth">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Click to upload or drag and drop
                    </p>
                  </div>
                </div>
                <Button 
                  onClick={handleVerification} 
                  disabled={isVerifying || !partNumber}
                  variant="premium"
                  className="w-full"
                >
                  {isVerifying ? (
                    <>
                      <Clock className="w-4 h-4 mr-2 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    <>
                      <Shield className="w-4 h-4 mr-2" />
                      Verify Part
                    </>
                  )}
                </Button>
              </div>
            </Card>

            {/* Results */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Verification Results</h2>
              {partNumber ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-medium">Part: {partNumber}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Authenticity Confidence:</span>
                      <Badge variant="secondary">96%</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Manufacturer:</span>
                      <span>ProCorp Industries</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Production Date:</span>
                      <span>2023-08-15</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Batch Number:</span>
                      <span>BC-2023-0815</span>
                    </div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="font-medium text-green-800">Verification Successful</span>
                    </div>
                    <p className="text-sm text-green-700 mt-1">
                      This part has been verified as authentic with high confidence.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Search className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    Enter a part number to begin verification
                  </p>
                </div>
              )}
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="batch" className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Batch Verification</h2>
            <div className="border-2 border-dashed border-border rounded-lg p-12 text-center">
              <Upload className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-medium mb-2">Upload CSV File</h3>
              <p className="text-muted-foreground mb-4">
                Upload a CSV file with part numbers for batch verification
              </p>
              <Button variant="outline">Choose File</Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Verification History</h2>
            <div className="space-y-4">
              {verificationHistory.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="flex items-center gap-4">
                    {item.status === "Verified" ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-orange-500" />
                    )}
                    <div>
                      <p className="font-medium">{item.part}</p>
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant={item.status === "Verified" ? "secondary" : "destructive"}>
                      {item.confidence}% confidence
                    </Badge>
                    <Badge variant="outline">{item.status}</Badge>
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