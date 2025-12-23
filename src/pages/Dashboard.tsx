import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { AlertCircle, Filter, BarChart3, LineChart as LineChartIcon, Search } from "lucide-react";
import { useState } from "react";

const chartData = [
  { date: "Sep 25", spend: 3200, budget: 3500 },
  { date: "Sep 26", spend: 2800, budget: 3500 },
  { date: "Sep 27", spend: 3500, budget: 3500 },
  { date: "Sep 28", spend: 2900, budget: 3500 },
  { date: "Sep 29", spend: 3100, budget: 3500 },
  { date: "Sep 30", spend: 3400, budget: 3500 },
  { date: "Oct 1", spend: 3200, budget: 3500 },
  { date: "Oct 2", spend: 4200, budget: 3500 },
  { date: "Oct 3", spend: 3100, budget: 3500 },
  { date: "Oct 4", spend: 3300, budget: 3500 },
  { date: "Oct 5", spend: 2900, budget: 3500 },
  { date: "Oct 6", spend: 3600, budget: 3500 },
  { date: "Oct 7", spend: 3200, budget: 3500 },
  { date: "Oct 8", spend: 3400, budget: 3500 },
  { date: "Oct 9", spend: 3100, budget: 3500 },
  { date: "Oct 10", spend: 3500, budget: 3500 },
  { date: "Oct 12", spend: 3200, budget: 3500 },
  { date: "Oct 13", spend: 3300, budget: 3500 },
];

const policyAlerts = [
  {
    id: "0001",
    employee: "Stephen Abubakar",
    department: "Design & Development",
    alert: "High",
    date: "26-09-2025",
  },
  {
    id: "0001",
    employee: "Stephen Abubakar",
    department: "Design & Development",
    alert: "Medium",
    date: "26-09-2025",
  },
  {
    id: "0001",
    employee: "Stephen Abubakar",
    department: "Design & Development",
    alert: "Medium",
    date: "26-09-2025",
  },
];

const recentActivity = [
  {
    id: 1,
    title: "Invoice",
    description: "Invoice INV-2025-987 for $75,000 was...",
    icon: "📄",
  },
  {
    id: 2,
    title: "Marketing",
    description: "The Marketing Q4 Budget was increased...",
    icon: "📊",
  },
  {
    id: 3,
    title: "Spending",
    description: "A new policy rule for Software Spending...",
    icon: "💰",
  },
];

export default function Dashboard() {
  const [chartType, setChartType] = useState<"bar" | "line">("bar");

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-4 md:p-8 space-y-6">
          {/* Apply for Villeto Banner */}
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-lg p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white">
                ✓
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Apply for Villeto</h3>
                <p className="text-sm text-gray-600">
                  This is a demo environment. Apply now to unlock your company's full environment.
                </p>
              </div>
            </div>
            <Button className="bg-teal-500 hover:bg-teal-600 text-white">
              Apply Now
            </Button>
          </div>

          {/* Welcome Section with Search */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome Back, XYZ Corporation!
              </h1>
              <p className="text-gray-600">
                Here's what's happening with your expenses today.
              </p>
            </div>
            <div className="relative w-64">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by transaction etc"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <Card className="p-6">
              <p className="text-sm text-gray-600 mb-2">Total Spend</p>
              <p className="text-3xl font-bold text-gray-900 mb-3">$24,536.00</p>
              <p className="text-xs text-gray-500">This month you spent extra $1,000</p>
            </Card>

            <Card className="p-6">
              <p className="text-sm text-gray-600 mb-2">Overall Budget Utilization</p>
              <p className="text-3xl font-bold text-gray-900 mb-3">40%</p>
              <p className="text-xs text-gray-500">Your budget utilization is 40%</p>
            </Card>

            <Card className="p-6">
              <p className="text-sm text-gray-600 mb-2">Total Accounts Payable</p>
              <p className="text-3xl font-bold text-gray-900 mb-3">$24,536.00</p>
              <p className="text-xs text-gray-500">You have 10 accounts to pay</p>
            </Card>

            <Card className="p-6">
              <p className="text-sm text-gray-600 mb-2">Total Accounts Receivable</p>
              <p className="text-3xl font-bold text-gray-900 mb-3">$24,536.00</p>
              <p className="text-xs text-gray-500">10 accounts outstanding</p>
            </Card>

            <Card className="p-6">
              <p className="text-sm text-gray-600 mb-2">Critical Policy Alerts</p>
              <p className="text-3xl font-bold text-gray-900 mb-3">10</p>
              <p className="text-xs text-red-500">Authorize Policy Alerts</p>
            </Card>
          </div>

          {/* Chart Section */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-2">
                <Button
                  variant={chartType === "bar" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setChartType("bar")}
                  className="gap-2"
                >
                  <BarChart3 className="w-4 h-4" />
                  Expense Overview
                </Button>
                <Button
                  variant={chartType === "line" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setChartType("line")}
                  className="gap-2"
                >
                  <LineChartIcon className="w-4 h-4" />
                  Cash Flow
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">Spend</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="text-xs text-gray-600">Budget</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="date" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "none",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
                <Legend />
                <Bar dataKey="spend" fill="#14B8A6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="budget" fill="#F87171" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Policy Alerts and Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Policy Alerts */}
            <div className="lg:col-span-2">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Policy Alerts
                    </h3>
                    <p className="text-sm text-gray-600">Your latest policy alerts</p>
                  </div>
                  <AlertCircle className="w-5 h-5 text-gray-400" />
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-gray-600 font-medium">
                          ID NO
                        </th>
                        <th className="text-left py-3 px-4 text-gray-600 font-medium">
                          NAME OF EMPLOYEE
                        </th>
                        <th className="text-left py-3 px-4 text-gray-600 font-medium">
                          DEPARTMENT
                        </th>
                        <th className="text-left py-3 px-4 text-gray-600 font-medium">
                          POLICY ALERT
                        </th>
                        <th className="text-left py-3 px-4 text-gray-600 font-medium">
                          DATE
                        </th>
                        <th className="text-left py-3 px-4 text-gray-600 font-medium">
                          ACTION
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {policyAlerts.map((alert, idx) => (
                        <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 text-gray-900">{alert.id}</td>
                          <td className="py-3 px-4 text-gray-900">{alert.employee}</td>
                          <td className="py-3 px-4 text-gray-600">{alert.department}</td>
                          <td className="py-3 px-4">
                            <span
                              className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                                alert.alert === "High"
                                  ? "bg-red-100 text-red-700"
                                  : "bg-amber-100 text-amber-700"
                              }`}
                            >
                              {alert.alert === "High" ? "🔴" : "🟠"} {alert.alert}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-600">{alert.date}</td>
                          <td className="py-3 px-4 text-gray-400">•••</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Recent Activity
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Your recent significant system actions
              </p>

              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="pb-4 border-b border-gray-100 last:border-0">
                    <div className="flex gap-3">
                      <div className="text-2xl">{activity.icon}</div>
                      <div>
                        <p className="font-medium text-gray-900">{activity.title}</p>
                        <p className="text-xs text-gray-600">{activity.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="link" className="text-teal-500 p-0 mt-4">
                See all
              </Button>
            </Card>
          </div>

          {/* Owner Dashboard Section */}
          <Card className="p-6 bg-gradient-to-br from-gray-50 to-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Owner Dashboard
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Special insights and controls for business owners
            </p>

            <div className="space-y-3">
              <p className="text-sm text-gray-700">
                As an owner, you have access to all financial data and company settings.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Company financial performance metrics</li>
                <li>• Departmental spending breakdowns</li>
                <li>• Executive reports and analytics</li>
                <li>• Full administrative controls</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
