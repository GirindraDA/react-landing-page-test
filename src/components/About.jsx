function About() {
  return (
    // <div className="p-2 md:p-4 mt-12">
    //   <section className="max-w-6xl mx-auto mb-12">
    //     <h1 className="text-3xl md:text-4xl font-bold mb-12">
    //       About Villa <span className="text-teal-600">Amadaha</span>
    //     </h1>

    //     <div className="grid md:grid-cols-2 gap-8 items-start">
    //       <div className="relative">
    //         <img
    //           src="src/assets/10.png"
    //           alt="Villa pool"
    //           className="w-full h-auto rounded-lg shadow-lg"
    //         />
    //       </div>

    //       <div className="space-y-6">
    //         <p className="text-gray-700 leading-relaxed">
    //           Villa Amadaha consist of Two Luxury Villas and one Traditional
    //           Javanese House surrounded by a tranquil rain forest setting,
    //           traditional Indonesian houses anda a farm overlooking the area.
    //         </p>

    //         <div className="flex gap-8 pt-4">
    //           <div>
    //             <div className="text-3xl font-bold">
    //               +6{" "}
    //               <span className="text-base font-normal text-gray-600">
    //                 / Room
    //               </span>
    //             </div>
    //             <div className="text-sm text-gray-600 mt-1">Room options</div>
    //           </div>

    //           <div>
    //             <div className="text-3xl font-bold">
    //               +2{" "}
    //               <span className="text-base font-normal text-gray-600">
    //                 / Facilities
    //               </span>
    //             </div>
    //             <div className="text-sm text-gray-600 mt-1">
    //               Facilities available
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>

    <div className="p-2 md:p-4 mt-12">
      <div className="max-w-7xl mx-auto mb-12">
        <div className="mb-12 lg:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-12">
            About Villa <span className="text-teal-600">Amadaha</span>
          </h1>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80"
              alt="Villa Amadaha Pool View"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Text Content Section */}
          <div className="flex flex-col justify-between h-full">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Villa Amadaha consist of Two Luxury Villas and one Traditional
              Javanese House surrounded by a tranquil rain forest setting,
              traditional Indonesian houses anda a farm overlooking the area.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 mt-8 lg:mt-auto">
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl sm:text-3xl font-meidium text-gray-600">
                    +6
                  </span>
                  <span className="text-teal-600 text-sm font-medium">
                    / Room
                  </span>
                </div>
                <p className="text-gray-600 text-sm">Room options</p>
              </div>

              <div className="flex flex-col">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl sm:text-3xl font-medium text-gray-600">
                    +2
                  </span>
                  <span className="text-teal-600 text-sm font-medium">
                    / Facilities
                  </span>
                </div>
                <p className="text-gray-600 text-sm">Facilities available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
