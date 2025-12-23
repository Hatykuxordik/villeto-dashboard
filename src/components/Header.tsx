import { Bell, Calendar, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface HeaderProps {
  onMenuToggle?: (open: boolean) => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    onMenuToggle?.(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200 px-4 md:px-8 py-4 flex items-center justify-between">
      {/* Left Section - Menu Toggle (Mobile) */}
      <div className="md:hidden">
        <button
          onClick={handleMenuToggle}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Center Section - Empty on mobile, can be used for title */}
      <div className="flex-1 md:flex-none"></div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Date Range Picker */}
        <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200">
          <Calendar className="w-4 h-4 text-gray-600" />
          <span className="text-sm text-gray-600">Sep 25, 2025 - Oct 13,2025</span>
        </div>

        {/* Notification Bell */}
        <button className="relative p-2 hover:bg-gray-100 rounded-lg">
          <Bell className="w-5 h-5 text-gray-700" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
          <div className="hidden md:block text-right">
            <p className="text-sm font-medium text-gray-900">XYZ Corporation</p>
            <p className="text-xs text-gray-600">Admin</p>
          </div>
          <button className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400">
            <User className="w-4 h-4 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
}
