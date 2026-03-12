// src/app/(dashboard)/error.tsx
"use client";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-red-600">Something went wrong!</h2>
      <Button onClick={reset} className="mt-4">Try again</Button>
    </div>
  );
}