// src/app/(dashboard)/products/new/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AddProductPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard/products");
    }, 1000);
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg border shadow-sm">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Product Name</Label>
            <Input placeholder="e.g. MacBook Pro" required />
          </div>
          <div className="space-y-2">
            <Label>SKU / Barcode</Label>
            <Input placeholder="e.g. APL-001" required />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Category</Label>
            <Select>
              <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
                <SelectItem value="software">Software</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Price (€)</Label>
            <Input type="number" step="0.01" placeholder="0.00" required />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Initial Stock</Label>
            <Input type="number" placeholder="0" />
          </div>
          <div className="space-y-2">
            <Label>Warehouse</Label>
            <Select>
              <SelectTrigger><SelectValue placeholder="Select warehouse" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="w1">Main Warehouse</SelectItem>
                <SelectItem value="w2">Distribution Center</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Description</Label>
          <textarea className="w-full p-2 border rounded-md min-h-[100px]" placeholder="Product details..." />
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button type="button" variant="outline" onClick={() => router.back()}>Cancel</Button>
          <Button type="submit" disabled={loading}>{loading ? "Saving..." : "Save Product"}</Button>
        </div>
      </form>
    </div>
  );
}