// src/components/layout/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, Package, Warehouse, ShoppingCart, 
  Tag, Users, Settings, FileText, LogOut, PlusCircle, 
  ScanLine, TrendingUp, FileSpreadsheet 
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    subItems: [
      { label: "Overview", href: "/dashboard", id: 5 },
      { label: "Sales", href: "/dashboard/sales", id: 6 },
      { label: "Stock", href: "/dashboard/stock", id: 7 },
      { label: "Activity", href: "/dashboard/activity", id: 8 },
    ]
  },
  {
    title: "Produits",
    icon: Package,
    href: "/dashboard/products",
    subItems: [
      { label: "Liste", href: "/dashboard/products", id: 9 },
      { label: "Ajouter", href: "/dashboard/products/new", id: 10 },
      { label: "Scanner", href: "/dashboard/products/scanner", id: 14 },
    ]
  },
  {
    title: "Entrepôts",
    icon: Warehouse,
    href: "/dashboard/warehouses",
    subItems: [
      { label: "Liste", href: "/dashboard/warehouses", id: 15 },
      { label: "Stock", href: "/dashboard/warehouses/stock", id: 17 },
    ]
  },
  {
    title: "Ventes",
    icon: ShoppingCart,
    href: "/dashboard/sales",
    subItems: [
      { label: "POS Interface", href: "/dashboard/sales/pos", id: 24 },
      { label: "Historique", href: "/dashboard/sales", id: 23 },
    ]
  },
  {
    title: "Paramètres",
    icon: Settings,
    href: "/dashboard/settings",
    subItems: [
      { label: "Utilisateurs", href: "/dashboard/settings/users", id: 37 },
      { label: "Rôles", href: "/dashboard/settings/roles", id: 39 },
    ]
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen bg-slate-900 text-slate-50 flex flex-col fixed left-0 top-0 overflow-y-auto">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-xl font-bold tracking-tight text-white">GESTION STOCK</h1>
        <p className="text-xs text-slate-400 mt-1">v2.4.0 Pro</p>
      </div>

      <nav className="flex-1 p-4 space-y-6">
        {menuItems.map((item) => (
          <div key={item.title}>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-2">
              {item.title}
            </div>
            <div className="space-y-1">
              {item.subItems.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className={cn(
                    "flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors",
                    pathname === sub.href
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  )}
                >
                  <span className="w-2 h-2 rounded-full bg-slate-600 mr-3" />
                  {sub.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">
            AD
          </div>
          <div className="text-sm">
            <p className="font-medium text-white">Admin User</p>
            <p className="text-xs text-slate-400">admin@stock.com</p>
          </div>
        </div>
        <button className="w-full mt-4 flex items-center justify-center gap-2 text-sm text-red-400 hover:text-red-300">
          <LogOut size={16} /> Logout
        </button>
      </div>
    </div>
  );
}