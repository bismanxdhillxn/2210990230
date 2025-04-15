import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mockData = [
  { name: "Mon", likes: 400, shares: 240 },
  { name: "Tue", likes: 300, shares: 139 },
  { name: "Wed", likes: 200, shares: 980 },
  { name: "Thu", likes: 278, shares: 390 },
  { name: "Fri", likes: 189, shares: 480 },
  { name: "Sat", likes: 239, shares: 380 },
  { name: "Sun", likes: 349, shares: 430 },
];

export default function SocialMediaAnalytics() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setData(mockData);
    }, 500);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Social Media Analytics</h1>

      <Tabs defaultValue="likes" className="mb-6">
        <TabsList>
          <TabsTrigger value="likes">Likes</TabsTrigger>
          <TabsTrigger value="shares">Shares</TabsTrigger>
        </TabsList>
        <TabsContent value="likes">
          <Card>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="likes" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="shares">
          <Card>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="shares" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Button onClick={() => alert("Exported Data")}>Export</Button>
    </div>
  );
}
