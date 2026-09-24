export default function Hero() {
  return (
    <section id="home" className="min-h-[85vh] lg:min-h-[90vh] flex items-center pt-20 bg-[#07111F]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-[#94A3B8] text-sm font-medium tracking-widest uppercase">
                Full-Stack Developer • Digital Solutions
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                I build digital products<br />
                that mean business.
              </h1>
              <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed max-w-xl">
                I design and develop fast, responsive websites, e-commerce platforms and custom web applications that help businesses operate, sell and grow online.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-[#FF8A3D] text-white px-8 py-4 rounded-lg hover:bg-[#FF8A3D]/90 transition-colors font-semibold text-center text-lg flex items-center justify-center gap-2"
              >
                Start a Project
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
              <a
                href="#projects"
                className="border border-white/20 text-white px-8 py-4 rounded-lg hover:border-[#2F80FF] hover:text-[#2F80FF] transition-colors font-semibold text-center text-lg"
              >
                Explore My Work ↓
              </a>
            </div>

            <div className="flex items-center gap-2 text-[#94A3B8] text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Available for selected projects
            </div>
          </div>

          <div className="relative">
            <div className="relative space-y-4">
              <div className="bg-[#0D1B2A] rounded-xl border border-white/8 p-4 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="flex-1 bg-white/5 rounded h-6 ml-2"></div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-[#94A3B8] text-xs mb-2">toptankkenya.co.ke</div>
                  <div className="space-y-2">
                    <div className="bg-white/10 rounded h-3 w-3/4"></div>
                    <div className="bg-white/10 rounded h-3 w-1/2"></div>
                    <div className="bg-[#2F80FF]/20 rounded h-8 w-1/3"></div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0D1B2A] rounded-xl border border-white/8 p-4 transform -rotate-3 hover:rotate-0 transition-transform duration-500 ml-8">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="flex-1 bg-white/5 rounded h-6 ml-2"></div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-[#94A3B8] text-xs mb-2">majestycompucarelimited.com</div>
                  <div className="space-y-2">
                    <div className="bg-white/10 rounded h-3 w-2/3"></div>
                    <div className="bg-white/10 rounded h-3 w-1/3"></div>
                    <div className="bg-[#FF8A3D]/20 rounded h-8 w-1/4"></div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0D1B2A] rounded-xl border border-white/8 p-4 transform rotate-1 hover:rotate-0 transition-transform duration-500 ml-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="flex-1 bg-white/5 rounded h-6 ml-2"></div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-[#94A3B8] text-xs mb-2">careeraccountsupport.com</div>
                  <div className="space-y-2">
                    <div className="bg-white/10 rounded h-3 w-3/4"></div>
                    <div className="bg-white/10 rounded h-3 w-1/2"></div>
                    <div className="bg-[#2F80FF]/20 rounded h-8 w-1/3"></div>
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
