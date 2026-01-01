import { useState } from "react";
import { ChevronDown, Calendar } from "lucide-react";
import Navbar from "./Navbar";
import ButtonCta from "./ButtonCta";

function Hero({ villaCategories }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("Room");

  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);

  const handleCheckAvailability = () => {
    const available = Math.random() > 0.5;
    setIsAvailable(available);
    setShowModal(true);
  };

  return (
    <div className="relative min-h-screen w-full p-2 md:p-4">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('src/assets/6.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          villaCategories={villaCategories}
        />

        {/* Hero Content */}
        <div className="px-4 lg:px-8 mt-8 lg:mt-24">
          <div className="max-w-6xl">
            {/* Mobile Title */}
            <h1 className="lg:hidden text-white text-2xl font-bold leading-tight mb-6">
              Studio villa made of bamboo, located near the top of Mount Geulis
              with a stunning 180 degrees bird's eye view.
            </h1>

            {/* Desktop Title */}
            <h1 className="hidden lg:block text-white text-5xl font-bold leading-tight mb-4">
              Make your comfort is
              <br />
              our happiness
            </h1>
            <p className="hidden lg:block text-white text-lg mb-8 max-w-xl">
              Studio villa made of bamboo, located near the top of Mount Geulis
              with a stunning 180 degree bird's eye view.
            </p>

            {/* Mobile Explore Button */}
            <button className="lg:hidden w-full bg-white text-teal-700 py-3 rounded font-medium mb-4">
              Explore room
            </button>

            {/* Desktop Explore Button */}
            <button className="hidden lg:inline-block bg-white text-teal-700 px-8 py-3 rounded font-medium hover:bg-gray-50 transition-colors">
              Explore Rooms
            </button>
          </div>

          {/* Booking Form - Mobile */}
          <div className="lg:hidden mt-6 bg-white rounded-lg p-4 shadow-lg">
            <div className="relative mb-4">
              <select
                value={selectedRoom}
                onChange={(e) => setSelectedRoom(e.target.value)}
                className="w-full px-4 py-3 border rounded appearance-none bg-white text-gray-700"
              >
                <option>Room</option>
                {villaCategories.map((category, index) => (
                  <option key={index}>{category}</option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600"
                size={20}
              />
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="flex items-center gap-2 border rounded px-3 py-3">
                <input
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="text-gray-700 border-0 outline-none cursor-pointer w-full bg-transparent text-sm"
                />
              </div>
              <div className="flex items-center gap-2 border rounded px-3 py-3">
                <input
                  type="date"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  className="text-gray-700 border-0 outline-none cursor-pointer w-full bg-transparent text-sm"
                />
              </div>
            </div>

            <button
              onClick={handleCheckAvailability}
              className="w-full bg-teal-700 text-white py-3 rounded font-medium hover:bg-teal-800 transition-colors"
            >
              Check availability
            </button>
          </div>
        </div>

        {/* Booking Form - Desktop */}
        <div className="hidden lg:block fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-4xl px-8">
          <div className="bg-white rounded-lg shadow-xl p-6">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <select
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                  className="w-full px-4 py-3 border rounded appearance-none bg-white text-gray-700"
                >
                  <option>Room</option>
                  {villaCategories.map((category, index) => (
                    <option key={index}>{category}</option>
                  ))}
                </select>
                <ChevronDown
                  className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600"
                  size={20}
                />
              </div>

              <div className="border-l h-12"></div>

              <div className="flex items-center gap-3 flex-1 px-4">
                <input
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="text-gray-700 border-0 outline-none cursor-pointer w-full bg-transparent text-sm"
                />
              </div>

              <div className="border-l h-12"></div>

              <div className="flex items-center gap-3 flex-1 px-4">
                <input
                  type="date"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  className="text-gray-700 border-0 outline-none cursor-pointer w-full bg-transparent text-sm"
                />
              </div>

              <button
                onClick={handleCheckAvailability}
                className="bg-teal-700 text-white px-8 py-3 rounded font-medium hover:bg-teal-800 transition-colors whitespace-nowrap"
              >
                Check availability
              </button>
            </div>
          </div>
        </div>

        {/* Modal CTA */}
        {showModal && (
          <ButtonCta
            room={selectedRoom}
            startDate={checkInDate || "Check In"}
            endDate={checkOutDate || "Check Out"}
            isAvailable={isAvailable}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </div>
  );
}

export default Hero;
