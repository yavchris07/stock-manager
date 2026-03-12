// src/components/layout/MobileNav.tsx
"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Sidebar } from "./Sidebar"; // Reuse existing sidebar
import { Button } from "@/components/ui/button";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button variant="outline" size="icon" onClick={() => setIsOpen(true)}>
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 lg:hidden" onClick={() => setIsOpen(false)}>
          <div className="fixed inset-y-0 left-0 w-3/4 max-w-xs" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-end p-4">
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <Sidebar />
          </div>
        </div>
      )}
    </>
  );
}