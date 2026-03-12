// src/app/(auth)/login/page.tsx (Point 1)
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard");
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">GESTION STOCK</h1>
        <p className="text-slate-500">Sign in to your account</p>
      </div>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="text-sm font-medium">Email</label>
          <Input type="email" placeholder="admin@stock.com" defaultValue="admin@stock.com" />
        </div>
        <div>
          <label className="text-sm font-medium">Password</label>
          <Input type="password" placeholder="••••••••" defaultValue="password" />
          <div className="text-right mt-1">
            <Link href="/auth/forgot-password" className="text-xs text-blue-600 hover:underline">Forgot password?</Link>
          </div>
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </Button>
      </form>
      <div className="text-center text-sm">
        Don&apos;t have an account? <Link href="/auth/register" className="text-blue-600 hover:underline">Register</Link>
      </div>
    </div>
  );
}