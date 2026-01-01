import { Bed, Users } from "lucide-react";

function Villa() {
  return (
    <div className="p-2 md:p-4 mb-12">
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our choise of <span className="text-teal-600">Villa Studios</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img
              src="src/assets/9.png"
              alt="4 Bedroom Villa"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">4 Bedroom Villa</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <span className="font-semibold">MAIN Facilities</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                <span>Wifi provide, TV & Aircons, Kitchen, Swimming pool</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <Bed size={16} />
                  <span>4 Bed</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={16} />
                  <span>8 Persons</span>
                </div>
              </div>
              <div className="text-xl font-bold">
                Rp 3.749.000{" "}
                <span className="text-sm font-normal text-gray-600">
                  /night
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-teal-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow text-white">
            <img
              src="src/assets/7.png"
              alt="Joglo House"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Joglo House</h3>
              <div className="flex items-center gap-2 text-sm mb-1">
                <span className="font-semibold">MAIN Facilities</span>
              </div>
              <div className="flex items-center gap-2 text-sm mb-3">
                <span>Wifi provide, TV & Aircons, Kitchen, Swimming pool</span>
              </div>
              <div className="flex items-center gap-4 text-xs mb-3">
                <div className="flex items-center gap-1">
                  <Bed size={16} />
                  <span>3 Bed</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={16} />
                  <span>6 Persons</span>
                </div>
              </div>
              <div className="text-xl font-bold">
                Rp 3.749.000 <span className="text-sm font-normal">/night</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img
              src="src/assets/8.png"
              alt="Rusta House"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Rusta House</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <span className="font-semibold">MAIN Facilities</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                <span>Wifi provide, TV & Aircons, Kitchen, Swimming pool</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <Bed size={16} />
                  <span>3 Bed</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={16} />
                  <span>6 Persons</span>
                </div>
              </div>
              <div className="text-xl font-bold">
                Rp 3.999.000{" "}
                <span className="text-sm font-normal text-gray-600">
                  /night
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="px-8 py-3 border-2 border-teal-600 text-teal-600 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors">
            Load More
          </button>
        </div>
      </section>
    </div>
  );
}

export default Villa;
