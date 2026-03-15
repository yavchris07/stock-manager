// import Image from "next/image";
import LoginPage from "./auth/login/page";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <LoginPage />
      </div>
    </div>
  );
}
