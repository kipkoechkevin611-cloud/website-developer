export default function Hero() {
  return (
    <section id="home" className="min-h-[70vh] lg:min-h-[82vh] flex items-center pt-16 bg-[#07111F]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-[#94A3B8] text-xs font-medium tracking-widest uppercase mb-4">
                FULL-STACK DEVELOPER • DIGITAL SOLUTIONS
              </p>
              <h1 className="text-[clamp(48px,6vw,82px)] font-bold text-white leading-[1.05]">
                I build digital products<br />
                that mean business.
              </h1>
              <p className="text-base md:text-lg text-[#94A3B8] leading-[1.65] max-w-[520px]">
                I design and develop fast, responsive websites, e-commerce platforms and custom web applications that help businesses operate, sell and grow online.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="bg-[#2F80FF] text-white px-6 py-3 rounded-lg hover:bg-[#2F80FF]/90 transition-all hover:translate-y-[-2px] font-medium text-base flex items-center justify-center gap-2"
              >
                Start a Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
              <a
                href="#projects"
                className="border border-white/20 text-white px-6 py-3 rounded-lg hover:border-[#2F80FF] hover:text-[#2F80FF] transition-all hover:translate-y-[-2px] font-medium text-base"
              >
                Explore My Work ↓
              </a>
            </div>

            <div className="flex items-center gap-2 text-[#94A3B8] text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Available for selected projects
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative space-y-3">
              <div className="bg-[#0D1B2A] rounded-xl border border-white/8 p-4 transform rotate-2 hover:rotate-0 hover:translate-y-[-4px] transition-all duration-500 shadow-2xl">
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

              <div className="bg-[#0D1B2A] rounded-xl border border-white/8 p-4 transform -rotate-3 hover:rotate-0 hover:translate-y-[-4px] transition-all duration-500 ml-8 shadow-2xl">
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

              <div className="bg-[#0D1B2A] rounded-xl border border-white/8 p-4 transform rotate-1 hover:rotate-0 hover:translate-y-[-4px] transition-all duration-500 ml-4 shadow-2xl">
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
