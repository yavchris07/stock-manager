// src/app/(dashboard)/purchases/[id]/receive/page.tsx
"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { useToast } from "@/components/ui/ToastProvider";
import { CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/toast-provider";

export default function ReceiveGoodsPage() {
  const params = useParams();
  const router = useRouter();
  const { addToast } = useToast();
  const [received, setReceived] = useState<{ itemId: string; qty: number }[]>([]);

  const handleReceive = () => {
    // Logic to update stock based on received quantities
    addToast("Goods received successfully. Stock updated.", "success");
    router.push("/dashboard/purchases");
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="mb-6 flex items-center gap-3">
        <CheckCircle className="h-8 w-8 text-green-600" />
        <div>
          <h1 className="text-2xl font-bold">Receive Goods</h1>
          <p className="text-slate-500">Purchase Order #{params.id}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border shadow-sm space-y-6">
        <div className="p-4 bg-yellow-50 text-yellow-800 rounded-md text-sm">
          Verify physical items against the purchase order before confirming.
        </div>

        {/* Mock Item Row */}
        <div className="grid grid-cols-12 gap-4 items-center border-b pb-4">
          <div className="col-span-6">
            <Label className="text-xs text-slate-500">Product</Label>
            <p className="font-medium">MacBook Pro M3</p>
          </div>
          <div className="col-span-3">
            <Label className="text-xs text-slate-500">Ordered</Label>
            <p>10 Units</p>
          </div>
          <div className="col-span-3">
            <Label className="text-xs text-slate-500">Received</Label>
            <Input type="number" defaultValue={10} className="h-8" />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button variant="outline" onClick={() => router.back()}>Cancel</Button>
          <Button onClick={handleReceive}>Confirm Receipt & Update Stock</Button>
        </div>
      </div>
    </div>
  );
}