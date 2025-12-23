import { useLocation } from "wouter";
import { ArrowLeft, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UploadReceipt() {
  const [, navigate] = useLocation();

  // Function to handle navigation to the expense details form (Step 2)
  const handleManualUpload = () => {
    // Navigate to the expense details form page
    navigate("/new-report/details");
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
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

          <h1 className="text-2xl font-bold text-gray-900">Upload Receipt</h1>

          <div className="flex flex-col items-center justify-center h-[60vh] border-2 border-dashed border-gray-300 rounded-xl p-8">
            <div className="text-center space-y-6">
              <div className="flex flex-col items-center">
                <ImageIcon className="w-16 h-16 text-gray-400" />
                <p className="text-gray-600 mt-4">
                  Have more than one receipt? Drop them here or tap to upload.
                </p>
              </div>

              <div className="flex items-center w-full">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-500">OR</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              <Button
                onClick={handleManualUpload}
                className="bg-teal-500 hover:bg-teal-600 text-white px-8"
              >
                Upload Receipt Manually
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
