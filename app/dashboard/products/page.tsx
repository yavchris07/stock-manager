// src/app/(dashboard)/products/page.tsx
import { mockProducts } from "@/infrastructure/mocks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, MoreHorizontal, Search } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Products List</h2>
          <p className="text-slate-500">Manage your inventory items, SKUs, and pricing.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Search className="mr-2 h-4 w-4" /> Filter
          </Button>
          <Link href="/dashboard/products/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Product
            </Button>
          </Link>
        </div>
      </div>

      <div className="rounded-md border bg-white">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 border-b">
            <tr>
              <th className="p-4 font-medium text-slate-500">Product</th>
              <th className="p-4 font-medium text-slate-500">SKU</th>
              <th className="p-4 font-medium text-slate-500">Category</th>
              <th className="p-4 font-medium text-slate-500">Price</th>
              <th className="p-4 font-medium text-slate-500">Stock</th>
              <th className="p-4 font-medium text-slate-500">Status</th>
              <th className="p-4 font-medium text-slate-500 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockProducts.map((product) => (
              <tr key={product.id} className="border-b hover:bg-slate-50/50">
                <td className="p-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">
                    IMG
                  </div>
                  <span className="font-medium">{product.name}</span>
                </td>
                <td className="p-4 font-mono text-xs">{product.sku}</td>
                <td className="p-4">{product.category}</td>
                <td className="p-4">{product.price.toFixed(2)} €</td>
                <td className="p-4">{product.stock}</td>
                <td className="p-4">
                  <Badge variant={product.stock < 5 ? "destructive" : "default"}>
                    {product.stock < 5 ? "Low Stock" : "In Stock"}
                  </Badge>
                </td>
                <td className="p-4 text-right">
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}