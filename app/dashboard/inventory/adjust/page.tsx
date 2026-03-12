// src/app/(dashboard)/inventory/adjust/page.tsx
"use client";
import { useState } from "react";
import { mockProducts } from "@/infrastructure/mocks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertCircle } from "lucide-react";

export default function StockAdjustmentPage() {
  const [selectedProduct, setSelectedProduct] = useState("");
  
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Stock Adjustment</h1>
        <p className="text-slate-500">Manually correct stock levels due to damage, loss, or found items.</p>
      </div>

      <div className="bg-white p-6 rounded-lg border shadow-sm space-y-6">
        <div className="p-4 bg-blue-50 text-blue-700 rounded-md flex items-start gap-3">
          <AlertCircle className="h-5 w-5 mt-0.5" />
          <div className="text-sm">
            <p className="font-bold">Warning</p>
            <p>This action will create an audit log entry. Ensure you have physical verification.</p>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Select Product</Label>
          <Select onValueChange={setSelectedProduct}>
            <SelectTrigger><SelectValue placeholder="Search product..." /></SelectTrigger>
            <SelectContent>
              {mockProducts.map(p => (
                <SelectItem key={p.id} value={p.id}>{p.name} (Current: {p.stock})</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedProduct && (
          <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-4">
            <div className="space-y-2">
              <Label>Adjustment Type</Label>
              <Select>
                <SelectTrigger><SelectValue placeholder="Type" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="add">Add Stock (+)</SelectItem>
                  <SelectItem value="remove">Remove Stock (-)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Quantity</Label>
              <Input type="number" placeholder="0" />
            </div>
          </div>
        )}

        <div className="space-y-2">
          <Label>Reason</Label>
          <Input placeholder="e.g. Damaged during shipping, Found in aisle 4" />
        </div>

        <div className="pt-4 flex justify-end">
          <Button className="w-full sm:w-auto">Confirm Adjustment</Button>
        </div>
      </div>
    </div>
  );
}