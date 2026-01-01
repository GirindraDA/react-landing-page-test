import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Customers() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "The place is nice with a village atmosphere surrounded by trees, really cool",
      name: "Phillip Press",
      role: "Traveler",
      image: "https://i.pravatar.cc/40?img=12",
    },
    {
      text: "The rooms are okay, the breakfast is okay, new and traditional menus are added",
      name: "Tatiana Levin",
      role: "Travel Blogger",
      image: "https://i.pravatar.cc/40?img=45",
    },
    {
      text: "strategic location, very pleasant at this villa. next time will come back again to spend the night here",
      name: "Kalya Vaccaro",
      role: "Digital Nomads",
      image: "https://i.pravatar.cc/40?img=33",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="p-2 md:p-4">
      <section className="px-5 py-8 lg:px-12 lg:py-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-start gap-2 mb-6">
                <div className="text-[56px] text-teal-600 leading-none font-serif">
                  "
                </div>
                <div className="pt-2">
                  <h2 className="text-[22px] leading-tight font-bold">
                    What Our <span className="text-teal-600">Customer</span>
                  </h2>
                  <h2 className="text-[22px] leading-tight font-bold">
                    Are Saying
                  </h2>
                </div>
              </div>

              {/* Single Testimonial Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
                <p className="text-gray-700 text-[15px] leading-relaxed mb-5">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-teal-700 text-[14px]">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-400 text-[12px]">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows - Mobile */}
              <div className="flex justify-end gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-1.5 hover:bg-gray-100 rounded transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-400" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-1.5 hover:bg-teal-50 rounded transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-teal-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            {/* Header with Navigation */}
            <div className="flex items-start justify-between mb-12">
              <div className="flex items-start gap-3">
                <div className="text-[72px] text-teal-600 leading-none font-serif mt-[-12px]">
                  "
                </div>
                <div>
                  <h2 className="text-[38px] leading-tight font-bold">
                    What Our <span className="text-teal-600">Customer</span>
                  </h2>
                  <h2 className="text-[38px] leading-tight font-bold">
                    Are Saying
                  </h2>
                </div>
              </div>

              {/* Navigation Arrows - Desktop */}
              <div className="flex gap-2 mt-4">
                <button
                  onClick={prevTestimonial}
                  className="p-2 hover:bg-gray-100 rounded transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-400" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 hover:bg-teal-50 rounded transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6 text-teal-600" />
                </button>
              </div>
            </div>

            {/* Three Testimonial Cards */}
            <div className="grid grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
                >
                  <p className="text-gray-700 text-[15px] leading-relaxed mb-8">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-teal-700 text-[15px]">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-[13px]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Customers;
