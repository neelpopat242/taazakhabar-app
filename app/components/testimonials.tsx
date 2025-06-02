const testimonials = [
  {
    quote:
      "Retor Tech turned my idea into a revenue-generating product in 8 weeks.",
    name: "Himank Agrawal",
    position: "Founder",
    company: "Arthneeti",
  },
  {
    quote:
      "Their expertise in React and Node.js allowed us to launch our platform ahead of schedule.",
    name: "Gaurav Gupta",
    position: "CEO",
    company: "Infind",
  },
  {
    quote:
      "The website helped us attract 40% more patients in the first month after launch.",
    name: "Dr. Heena Kotak",
    position: "Director",
    company: "Muskan Dental Clinic",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-950" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            What Our <span className="text-blue-500">Clients</span> Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Don&apos;t just take our word for it - hear from some of our
            satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md ${
                index === 1 ? "md:transform md:-translate-y-4" : ""
              }`}
            >
              <div className="mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
              </div>
              <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6 italic">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-blue-500 font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.position} @ {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
