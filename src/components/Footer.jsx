import { Phone, Mail, MapPin } from "lucide-react";

function Footer({ villaCategories }) {
  return (
    <div className="p-2 md:p-4">
      <section className="relative h-[60vh] min-h-[400px] md:min-h-[600px] flex items-center px-4 md:px-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('src/assets/explore.png')`,
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full text-center md:text-left">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Make your comfort is
            <br />
            our happiness
          </h2>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg">
            Book now
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 md:py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-row justify-between md:grid md:grid-cols-3 gap-6 md:gap-12">
            {/* Quick Links */}
            <div className="flex-1 md:flex-none">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">
                Quick link
              </h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-teal-700 transition-colors text-sm md:text-base"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-teal-700 transition-colors text-sm md:text-base"
                  >
                    Facility
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-teal-700 transition-colors text-sm md:text-base"
                  >
                    Gallery
                  </a>
                </li>
              </ul>
            </div>

            {/* Villa Categories */}
            <div className="flex-1 md:flex-none">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">
                Villa category
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {villaCategories.map((category, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-teal-700 transition-colors text-sm md:text-base"
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className="flex-1 md:flex-none">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">
                Contact Us
              </h3>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-2 md:gap-3">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-teal-700 flex-shrink-0 mt-1" />
                  <span className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    Jl. Raya Karang, Gabusan, Gg. Butri, Bokoharjo, Kec.
                    Prambanan, Kabupaten Sleman, Daerah Istimewa Yogyakarta
                    55571
                  </span>
                </li>
                <li className="flex items-center gap-2 md:gap-3">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-teal-700 flex-shrink-0" />
                  <span className="text-gray-600 text-xs md:text-sm">
                    +6285645678
                  </span>
                </li>
                <li className="flex items-center gap-2 md:gap-3">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-teal-700 flex-shrink-0" />
                  <span className="text-gray-600 text-xs md:text-sm">
                    info@villaamadaha.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
