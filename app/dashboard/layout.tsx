
import { Sidebar } from "@/components/layout/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <main className="flex-1 ml-64 overflow-y-auto">
        {/* Top Header could go here */}
        <div className="p-4 border-b bg-white flex justify-between items-center sticky top-0 z-10">
          <h2 className="font-semibold text-slate-700">Bienvenu, Admin</h2>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-100 rounded-full relative">
              <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full"></span>
              🔔
            </button>
            <div className="h-8 w-8 bg-blue-500 rounded-full text-white flex items-center justify-center font-bold">A</div>
          </div>
        </div>
        {children}
      </main>
    </div>
  );
}