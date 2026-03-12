// src/app/(dashboard)/products/[id]/edit/page.tsx
"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { StockService } from "@/infrastructure/services/StockService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";

export default function EditProductPage() {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    StockService.getProductById(params.id as string).then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [params.id]);

  if (loading) return <div className="p-8"><Skeleton className="h-96 w-full" /></div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Edit Product: {product.name}</h1>
      <form className="space-y-6 bg-white p-6 rounded-lg border shadow-sm">
        <div className="space-y-2">
          <Label>Product Name</Label>
          <Input defaultValue={product.name} />
        </div>
        <div className="space-y-2">
          <Label>Price</Label>
          <Input type="number" defaultValue={product.price} />
        </div>
        <div className="flex justify-end gap-3">
          <Button type="button" variant="outline" onClick={() => router.back()}>Cancel</Button>
          <Button type="button">Save Changes</Button>
        </div>
      </form>
    </div>
  );
}