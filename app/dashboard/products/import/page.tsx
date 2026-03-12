// src/app/(dashboard)/products/import/page.tsx
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UploadCloud, FileSpreadsheet } from "lucide-react";
import { useToast } from "@/components/ui/ToastProvider";

export default function ImportProductsPage() {
  const { addToast } = useToast();
  const [dragActive, setDragActive] = useState(false);

  const handleFile = (e: any) => {
    e.preventDefault();
    addToast("File uploaded. Processing 150 rows...", "info");
    setTimeout(() => addToast("Import successful!", "success"), 2000);
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Import Products</h1>
      <div 
        className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
          dragActive ? "border-blue-500 bg-blue-50" : "border-slate-300"
        }`}
        onDragEnter={() => setDragActive(true)}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleFile}
      >
        <FileSpreadsheet className="h-12 w-12 text-slate-400 mx-auto mb-4" />
        <p className="text-lg font-medium">Drag & Drop CSV file here</p>
        <p className="text-sm text-slate-500 mb-6">or click to browse</p>
        <Button variant="outline" onClick={handleFile}>
          <UploadCloud className="mr-2 h-4 w-4" /> Select File
        </Button>
        <div className="mt-8 text-left">
          <p className="text-sm font-bold mb-2">Required Columns:</p>
          <code className="block bg-slate-100 p-2 rounded text-xs">
            SKU, Name, Price, Category, Stock
          </code>
          <Button variant="link" className="text-blue-600 px-0">Download Template CSV</Button>
        </div>
      </div>
    </div>
  );
}