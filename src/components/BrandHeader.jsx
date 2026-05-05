import { Link } from "react-router-dom";
import logo from "@/assets/icon-only.png";

export default function BrandHeader() {
  return (
    <header className="w-full flex items-center justify-center py-6">
      <Link to="/" className="flex items-center gap-3">
        <img
          src={logo}
          alt="MyManasa"
          className="h-11 w-11 rounded-2xl shadow-sm"
        />

        <div>
          <p className="text-lg font-semibold text-[#3d5a4d] leading-none">
            MyManasa
          </p>
          <p className="text-xs text-[#6f7f73] mt-1">
            MindWell Account
          </p>
        </div>
      </Link>
    </header>
  );
}