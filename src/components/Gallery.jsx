function Gallery() {
  return (
    <div className="p-2 md:p-4">
      <section className="py-8 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our <span className="text-teal-700">Gallery</span>
          </h2>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="row-span-2">
              <img
                src="src/assets/2.png"
                alt="Ocean view room"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>

            <div>
              <img
                src="src/assets/3.png"
                alt="Villa exterior"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>

            <div className="relative">
              <img
                src="src/assets/4.png"
                alt="Pool area"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 rounded-xl flex items-center justify-center">
                <a href="#" className="text-white text-xl font-semibold">
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
