// src/app/(dashboard)/partners/clients/page.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";

export default function ClientsPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Clients</h2>
          <p className="text-slate-500">Manage customer relationships and history</p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-500" />
            <Input placeholder="Search client..." className="pl-8" />
          </div>
          <Button><Plus className="mr-2 h-4 w-4" /> Add Client</Button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border p-8 text-center text-slate-500">
        <p>Client list table component goes here (Same pattern as Products)</p>
      </div>
    </div>
  );
}