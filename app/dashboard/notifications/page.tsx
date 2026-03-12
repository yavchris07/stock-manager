// src/app/(dashboard)/notifications/page.tsx
import { Bell, Check, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const notifications = [
  { id: 1, type: "alert", message: "Stock low for Logitech Mouse", time: "10 min ago", read: false },
  { id: 2, type: "info", message: "Purchase Order #123 received", time: "1 hour ago", read: false },
  { id: 3, type: "success", message: "Inventory Count completed", time: "1 day ago", read: true },
];

export default function NotificationsPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Notifications</h1>
        <Button variant="outline" size="sm">Mark all as read</Button>
      </div>
      <div className="space-y-4">
        {notifications.map((n) => (
          <Card key={n.id} className={!n.read ? "border-blue-500 bg-blue-50/50" : ""}>
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <Bell className={`h-5 w-5 ${n.read ? "text-slate-400" : "text-blue-600"}`} />
                <div>
                  <p className="font-medium">{n.message}</p>
                  <p className="text-xs text-slate-500">{n.time}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon"><Check className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon"><Trash2 className="h-4 w-4" /></Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}