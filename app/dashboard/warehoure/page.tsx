// src/app/(dashboard)/warehouses/page.tsx
import { mockWarehouses } from "@/infrastructure/mocks";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, MapPin } from "lucide-react";

export default function WarehousesPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Warehouses</h2>
        <Button><Plus className="mr-2 h-4 w-4" /> Add Warehouse</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockWarehouses.map((wh) => (
          <Card key={wh.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-slate-500" /> {wh.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-slate-500">{wh.location}</p>
              <div className="flex justify-between text-sm font-medium">
                <span>Capacity: {wh.capacity}</span>
                <span>Stock: {wh.currentStock}</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5 mt-2">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(wh.currentStock/wh.capacity)*100}%` }}></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}