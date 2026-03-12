// src/app/not-found.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
      <h1 className="text-6xl font-bold text-slate-900">404</h1>
      <p className="text-xl text-slate-500 mt-4">Page not found</p>
      <Link href="/dashboard" className="mt-8">
        <Button>Return to Dashboard</Button>
      </Link>
    </div>
  );
}