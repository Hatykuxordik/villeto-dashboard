import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

const expenseCategories = [
  "Travel",
  "Meals & Entertainment",
  "Office Supplies",
  "Software",
  "Hardware",
  "Utilities",
  "Marketing",
  "Other",
];

const merchants = [
  "Amazon",
  "Delta Airlines",
  "Uber",
  "Starbucks",
  "Microsoft",
  "Google",
  "Apple",
  "Other",
];

export default function NewReport() {
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState({
    reportName: "Exp Launch 2020",
    reportDate: "12/08/2025",
    amount: "",
    category: "",
    merchant: "",
    transactionDate: "",
    description: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddAnother = () => {
    // Reset form for another entry
    setFormData({
      reportName: formData.reportName,
      reportDate: formData.reportDate,
      amount: "",
      category: "",
      merchant: "",
      transactionDate: "",
      description: "",
    });
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Expense report submitted successfully!");
  };

  const handleSaveDraft = () => {
    // Handle save as draft
    console.log("Draft saved:", formData);
    alert("Expense report saved as draft!");
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-4 md:p-8 space-y-6">
          {/* Back Button */}
          <button
            onClick={() => navigate("/expenses")}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Report Header */}
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name of Report
                    </label>
                    <input
                      type="text"
                      name="reportName"
                      value={formData.reportName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Enter report name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Report Date
                    </label>
                    <input
                      type="text"
                      name="reportDate"
                      value={formData.reportDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="DD/MM/YYYY"
                    />
                  </div>
                </div>

                {/* Split Expense Link */}
                <a
                  href="#"
                  className="text-teal-500 hover:text-teal-600 font-medium text-sm"
                >
                  Split Expense
                </a>
              </div>

              {/* Form Fields */}
              <Card className="p-6 space-y-6">
                {/* Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Amount
                  </label>
                  <input
                    type="text"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter amount"
                  />
                </div>

                {/* Expense Category and Transaction Date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expense Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                    >
                      <option value="">Select expense</option>
                      {expenseCategories.map(cat => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Transaction Date
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        name="transactionDate"
                        value={formData.transactionDate}
                        onChange={handleInputChange}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Select date"
                      />
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                        📅
                      </button>
                    </div>
                  </div>
                </div>

                {/* Merchant */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Merchant
                  </label>
                  <select
                    name="merchant"
                    value={formData.merchant}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                  >
                    <option value="">Select Merchant</option>
                    {merchants.map(m => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                    placeholder="Write here...."
                    rows={6}
                  />
                </div>

                {/* Add Another Link */}
                <div className="text-right">
                  <button
                    onClick={handleAddAnother}
                    className="text-teal-500 hover:text-teal-600 font-medium text-sm"
                  >
                    Add Another
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button
                    onClick={handleSubmit}
                    className="bg-teal-500 hover:bg-teal-600 text-white px-8"
                  >
                    Submit
                  </Button>
                  <Button
                    onClick={handleSaveDraft}
                    variant="outline"
                    className="px-8 border-teal-500 text-teal-500 hover:bg-teal-50"
                  >
                    Save as Draft
                  </Button>
                </div>
              </Card>
            </div>

            {/* Right Column - Receipt Preview */}
            <div className="lg:col-span-1">
              <Card className="p-6 bg-gray-100 sticky top-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto">
                    A
                  </div>

                  <h3 className="text-lg font-bold text-gray-900">SHOP NAME</h3>
                  <p className="text-xs text-gray-600">
                    Address: Lorem Ipsum, 23-10
                    <br />
                    Telp. 11223344
                  </p>

                  <div className="border-t border-b border-gray-300 py-3 my-3">
                    <p className="text-xs font-bold text-gray-900 mb-2">
                      CASH RECEIPT
                    </p>
                    <div className="text-xs text-gray-600 space-y-1">
                      <div className="flex justify-between">
                        <span>Description</span>
                        <span>Price</span>
                      </div>
                      <div className="border-t border-gray-300 pt-1 mt-1">
                        <div className="flex justify-between text-xs">
                          <span>Lorem</span>
                          <span>2.2</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Ipsum</span>
                          <span>3.1</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Dolor sit amet</span>
                          <span>4.2</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Consectetur</span>
                          <span>3.0</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Adipiscing elit</span>
                          <span>4.4</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-b border-gray-300 py-3 my-3">
                    <div className="flex justify-between text-sm font-bold text-gray-900">
                      <span>Total</span>
                      <span>16.5</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600 mt-2">
                      <span>Cash</span>
                      <span>20.0</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>Change</span>
                      <span>3.5</span>
                    </div>
                  </div>

                  <div className="border-t border-b border-gray-300 py-3 my-3 text-xs text-gray-600 space-y-1">
                    <div className="flex justify-between">
                      <span>Bank card</span>
                      <span>••• ••• 234</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Approval Code</span>
                      <span>#123456</span>
                    </div>
                  </div>

                  <p className="text-sm font-bold text-gray-900">THANK YOU!</p>

                  <div className="text-center py-3">
                    <div className="text-xs font-bold tracking-wider text-gray-900">
                      |||||||||||||||||||
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
