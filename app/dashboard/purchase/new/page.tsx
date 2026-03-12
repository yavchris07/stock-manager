// src/app/(dashboard)/purchases/new/page.tsx
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2, Plus } from "lucide-react";

export default function CreatePurchasePage() {
  const [items, setItems] = useState([{ productId: "", qty: 1, cost: 0 }]);

  const addItem = () => setItems([...items, { productId: "", qty: 1, cost: 0 }]);
  const removeItem = (idx: number) => setItems(items.filter((_, i) => i !== idx));

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create Purchase Order</h1>
      <div className="bg-white p-6 rounded-lg border shadow-sm space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Supplier</Label>
            <Input placeholder="Select supplier" />
          </div>
          <div className="space-y-2">
            <Label>Expected Date</Label>
            <Input type="date" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="font-semibold">Items</h3>
            <Button type="button" variant="outline" size="sm" onClick={addItem}>
              <Plus className="h-4 w-4 mr-2" /> Add Line
            </Button>
          </div>
          {items.map((item, idx) => (
            <div key={idx} className="grid grid-cols-12 gap-4 items-end">
              <div className="col-span-6 space-y-2">
                <Label>Product</Label>
                <Input placeholder="Search product..." />
              </div>
              <div className="col-span-2 space-y-2">
                <Label>Qty</Label>
                <Input type="number" defaultValue={1} />
              </div>
              <div className="col-span-3 space-y-2">
                <Label>Cost per Unit</Label>
                <Input type="number" placeholder="0.00" />
              </div>
              <div className="col-span-1">
                <Button variant="ghost" size="icon" onClick={() => removeItem(idx)}>
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end pt-4">
          <Button className="w-full sm:w-auto">Create Purchase Order</Button>
        </div>
      </div>
    </div>
  );
}