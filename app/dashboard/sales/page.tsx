// src/app/(dashboard)/sales/pos/page.tsx
"use client";
import { useState } from "react";
import { mockProducts } from "@/infrastructure/mocks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Trash2, CreditCard } from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
}

export default function POSPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [search, setSearch] = useState("");

  const addToCart = (product: typeof mockProducts[0]) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Product Grid */}
      <div className="flex-1 p-6 overflow-y-auto bg-slate-50">
        <div className="mb-6">
          <Input 
            placeholder="Scan barcode ou nom produit..." 
            className="max-w-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mockProducts
            .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
            .map((product) => (
            <div 
              key={product.id} 
              onClick={() => addToCart(product)}
              className="bg-white p-4 rounded-lg shadow-sm border cursor-pointer hover:border-blue-500 transition-all active:scale-95"
            >
              <div className="h-24 bg-slate-100 rounded mb-3 flex items-center justify-center text-xs text-slate-400">
                Image
              </div>
              <h3 className="font-medium text-sm line-clamp-2">{product.name}</h3>
              <p className="text-blue-600 font-bold mt-2">{product.price.toFixed(2)} €</p>
              <p className="text-xs text-slate-400">Stock: {product.stock}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Sidebar */}
      <div className="w-96 bg-white border-l flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="font-bold text-lg flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" /> Commande actuelle
          </h2>
          <Button variant="ghost" size="sm" onClick={() => setCart([])}>Effacer</Button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cart.length === 0 && (
            <div className="text-center text-slate-400 mt-10">Pagnet vide</div>
          )}
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <div>
                <p className="font-medium text-sm">{item.name}</p>
                <p className="text-xs text-slate-500">{item.price} € x {item.qty}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm">{(item.price * item.qty).toFixed(2)} €</span>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t bg-slate-50 space-y-4">
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>{total.toFixed(2)} €</span>
          </div>
          <Button className="w-full h-12 text-lg" size="lg">
            <CreditCard className="mr-2 h-5 w-5" /> Verifier
          </Button>
        </div>
      </div>
    </div>
  );
}