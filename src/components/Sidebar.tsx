import { Link, useLocation } from "wouter";
import {
  Home,
  FileText,
  CreditCard,
  Users,
  Shield,
  DollarSign,
  Building2,
  TrendingUp,
  Mail,
  Settings,
  LogOut,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
  disabled?: boolean;
}

const navItems: NavItem[] = [
  { id: "overview", label: "Overview", icon: <Home className="w-5 h-5" />, href: "/" },
  { id: "expenses", label: "Expenses", icon: <FileText className="w-5 h-5" />, href: "/expenses" },
  { id: "cards", label: "Cards", icon: <CreditCard className="w-5 h-5" />, href: "/cards", disabled: true },
  { id: "people", label: "People", icon: <Users className="w-5 h-5" />, href: "/people", disabled: true },
  { id: "policies", label: "Policies", icon: <Shield className="w-5 h-5" />, href: "/policies", disabled: true },
  { id: "bill-pay", label: "Bill Pay", icon: <DollarSign className="w-5 h-5" />, href: "/bill-pay", disabled: true },
  { id: "vendor", label: "Vendor", icon: <Building2 className="w-5 h-5" />, href: "/vendor", disabled: true },
  { id: "insights", label: "Insights", icon: <TrendingUp className="w-5 h-5" />, href: "/insights", disabled: true },
  { id: "analytics", label: "Analytics", icon: <TrendingUp className="w-5 h-5" />, href: "/analytics", disabled: true },
  { id: "inbox", label: "Inbox", icon: <Mail className="w-5 h-5" />, href: "/inbox", disabled: true },
];

const bottomItems: NavItem[] = [
  { id: "settings", label: "Settings", icon: <Settings className="w-5 h-5" />, href: "/settings", disabled: true },
];

export default function Sidebar() {
  const [location] = useLocation();
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const isActive = (href: string) => location === href;

  const handleDisabledClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className="w-full h-full bg-gray-50 border-r border-gray-200 flex flex-col overflow-hidden">
      {/* Logo Section */}
      <div className="p-4 md:p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold">
            V
          </div>
          <span className="font-bold text-gray-900 hidden md:inline">Villeto</span>
        </div>
      </div>

      {/* Company Section */}
      <div className="p-4 md:p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              C
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">CocaCola LTD</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600 flex-shrink-0">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto px-3 md:px-4 py-4 space-y-2">
        {navItems.map((item) => (
          <div key={item.id}>
            {item.disabled ? (
              <button
                onClick={handleDisabledClick}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 cursor-not-allowed opacity-50"
                title="Feature coming soon"
              >
                <span className="flex-shrink-0">{item.icon}</span>
                <span className="text-sm font-medium hidden md:inline">{item.label}</span>
              </button>
            ) : (
              <Link href={item.href}>
                <a
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? "bg-teal-500 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  <span className="text-sm font-medium hidden md:inline">{item.label}</span>
                </a>
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 p-3 md:p-4 space-y-2">
        {bottomItems.map((item) => (
          <button
            key={item.id}
            onClick={handleDisabledClick}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 cursor-not-allowed opacity-50"
            title="Feature coming soon"
          >
            <span className="flex-shrink-0">{item.icon}</span>
            <span className="text-sm font-medium hidden md:inline">{item.label}</span>
          </button>
        ))}

        {/* Light Mode Toggle */}
        <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100">
          <div className="flex items-center gap-3">
            <Sun className="w-5 h-5 text-gray-700 flex-shrink-0" />
            <span className="text-sm font-medium text-gray-700 hidden md:inline">Light Mode</span>
          </div>
          <div className="w-10 h-6 bg-teal-500 rounded-full relative cursor-pointer flex-shrink-0">
            <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
          </div>
        </div>

        {/* Log Out */}
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
          <LogOut className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm font-medium hidden md:inline">Log Out</span>
        </button>
      </div>
    </div>
  );
}
