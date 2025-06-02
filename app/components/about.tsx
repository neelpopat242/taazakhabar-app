const About = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            {/*  eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Retor Tech Team"
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
              About <span className="text-blue-500">Retor Tech</span>
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Founded with a vision to make technology accessible and effective,
              Retor Tech is a team of passionate developers, designers, and
              strategists committed to crafting exceptional digital experiences.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Based in vibrant Bengaluru, we serve clients globally with a focus
              on three core values: craftsmanship, transparency, and speed. We
              believe in building solutions that not only look good but deliver
              measurable business outcomes.
            </p>

            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-500 mb-1">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Projects Completed
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-500 mb-1">4+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
