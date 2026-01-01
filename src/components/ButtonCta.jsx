import { useEffect } from "react";

function ButtonCta({ room, startDate, endDate, isAvailable, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-center mb-4">
          {isAvailable ? "Available" : "Not Available"}
        </h2>

        <p className="text-center text-gray-500 text-sm mb-6">
          {room} on {startDate} until {endDate}
          <br />
          is {isAvailable ? "available" : "not available"}
        </p>

        <button
          onClick={onClose}
          className="w-full bg-teal-700 hover:bg-teal-800 text-white font-medium py-3 px-4 rounded transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ButtonCta;
