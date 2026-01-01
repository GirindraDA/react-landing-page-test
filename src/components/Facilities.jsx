function Facilities() {
  return (
    <div className="p-2 md:p-4">
      <div className="max-w-7xl mx-auto">
        <section className="flex flex-col md:flex-row justify-between items-center mb-12 gap-12">
          <div className="flex-1 max-w-xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Various <span className="text-teal-700">facilities</span> that
              <br />
              you can enjoy
            </h1>
            <p className="text-gray-500 mb-8 leading-relaxed">
              We bring you together with your dream
              <br />
              holiday
            </p>
            <button className="bg-teal-700 text-white px-10 py-3.5 rounded-lg font-semibold hover:bg-teal-800 transition-all hover:shadow-lg">
              Explore
            </button>
          </div>

          {/* Images */}
          <div className="flex gap-5 flex-1 justify-end">
            <div className="w-72 h-52 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="src/assets/1.png"
                alt="Farm activities"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-72 h-52 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="src/assets/8.png"
                alt="Greenhouse"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Facilities;
