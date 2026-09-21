export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Building Digital Experiences That Work for Your Business.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                I design and develop fast, responsive websites, e-commerce platforms and custom web applications that turn business ideas into reliable digital solutions.
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-medium text-gray-700">
                <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full">Full-Stack Development</span>
                <span className="bg-green-50 text-green-700 px-4 py-2 rounded-full">Responsive Design</span>
                <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full">Business Systems</span>
                <span className="bg-orange-50 text-orange-700 px-4 py-2 rounded-full">E-commerce</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center text-lg"
              >
                Start a Project
              </a>
              <a
                href="#projects"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-semibold text-center text-lg"
              >
                View My Work
              </a>
            </div>

            <p className="text-gray-500 font-medium">
              Computer Science Graduate • Full-Stack Developer • Web & Business Systems
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 shadow-2xl">
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="flex-1 bg-gray-100 rounded h-6"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-4">
                    <div className="w-1/4 bg-gray-100 rounded h-24"></div>
                    <div className="flex-1 space-y-2">
                      <div className="bg-gray-100 rounded h-4 w-3/4"></div>
                      <div className="bg-gray-100 rounded h-4 w-1/2"></div>
                      <div className="bg-blue-100 rounded h-8 w-1/3"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-gray-100 rounded h-20"></div>
                    <div className="bg-gray-100 rounded h-20"></div>
                    <div className="bg-gray-100 rounded h-20"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="bg-green-100 rounded h-10 flex-1"></div>
                    <div className="bg-blue-100 rounded h-10 flex-1"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Live</div>
                    <div className="text-xs text-gray-500">Deployed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
