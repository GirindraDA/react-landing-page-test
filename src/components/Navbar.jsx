import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

function Navbar({ mobileMenuOpen, setMobileMenuOpen, villaCategories }) {
  const [villaCategoryOpen, setVillaCategoryOpen] = useState(false);

  return (
    <div>
      <div className="lg:hidden flex items-center justify-between px-4 py-4">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="flex gap-3">
          <button className="text-white text-sm">Contact us</button>
          <button className="bg-teal-700 text-white px-4 py-2 text-sm rounded">
            Login
          </button>
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-between px-8 py-6">
        <div className="relative">
          <button
            onClick={() => setVillaCategoryOpen(!villaCategoryOpen)}
            className="flex items-center gap-2 bg-white/95 px-4 py-2 rounded text-sm"
          >
            Villa Category
            <ChevronDown size={16} />
          </button>

          {villaCategoryOpen && (
            <div className="absolute top-full mt-2 bg-white rounded shadow-lg py-2 w-48 z-20">
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                About
              </a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Villa Categorys
              </a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Gallery
              </a>
            </div>
          )}
        </div>

        <div className="flex gap-4">
          <button className="text-white text-sm">Contact us</button>
          <button className="bg-teal-700 text-white px-6 py-2 text-sm rounded hover:bg-teal-800 transition-colors">
            Login
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white rounded-lg mx-4 shadow-lg overflow-hidden">
          <a
            href="#"
            className="block px-4 py-3 text-sm border-b hover:bg-gray-50"
          >
            About
          </a>
          <div className="relative">
            <button
              onClick={() => setVillaCategoryOpen(!villaCategoryOpen)}
              className="w-full flex items-center justify-between px-4 py-3 text-sm border-b hover:bg-gray-50"
            >
              Villa category
              <ChevronDown size={16} />
            </button>
            {villaCategoryOpen && (
              <div className="bg-gray-50">
                {villaCategories.map((category, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-8 py-2 text-sm hover:bg-gray-100"
                  >
                    {category}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="#" className="block px-4 py-3 text-sm hover:bg-gray-50">
            Gallery
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
