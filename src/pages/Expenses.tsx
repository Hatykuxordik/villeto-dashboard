import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { PlusIcon, FileText } from "lucide-react";

const expenseCategories = [
  {
    id: 1,
    label: "Drafts",
    count: 0,
    description: "Manage your saved items",
    icon: "📝",
    color: "bg-slate-500",
  },
  {
    id: 2,
    label: "Approved",
    count: 0,
    description: "View all items that have been reviewed.",
    icon: "✅",
    color: "bg-green-500",
  },
  {
    id: 3,
    label: "Submitted",
    count: 0,
    description: "Track entries that have been sent for review",
    icon: "📤",
    color: "bg-blue-500",
  },
  {
    id: 4,
    label: "Paid",
    count: 0,
    description: "Access records of completed payments.",
    icon: "💳",
    color: "bg-teal-500",
  },
];

export default function Expenses() {
  const [, navigate] = useLocation();

  const handleNewReport = () => {
    // Navigate to new report page when user provides it
    navigate("/new-report");
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-4 md:p-8 space-y-6">
          {/* Welcome Section */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Good Morning, Goodness.
            </h1>
          </div>

          {/* Expense Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {expenseCategories.map((category) => (
              <Card
                key={category.id}
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{category.label}</p>
                    <p className="text-4xl font-bold text-gray-900">{category.count}</p>
                  </div>
                  <div
                    className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center text-xl text-white shadow-md`}
                  >
                    {category.icon}
                  </div>
                </div>
                <p className="text-xs text-gray-600">{category.description}</p>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-32 h-32 mb-6 flex items-center justify-center">
              <FileText className="w-32 h-32 text-gray-300" strokeWidth={0.5} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">No expenses yet</h2>
            <p className="text-gray-600 text-center mb-8 max-w-md">
              You haven't added any expenses. Create your first expense to get started.
            </p>
            <Button
              onClick={handleNewReport}
              className="bg-teal-500 hover:bg-teal-600 text-white gap-2 px-6 py-2"
            >
              <PlusIcon className="w-4 h-4" />
              New Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
