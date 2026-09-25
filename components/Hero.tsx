export default function Hero() {
  return (
    <section id="home" className="min-h-[650px] lg:min-h-[720px] flex items-center pt-[72px] bg-[#07111F] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#2F80FF]/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto px-5 md:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[52%_48%] gap-8 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="space-y-4">
              <p className="text-[#94A3B8] text-xs font-medium tracking-[0.2em] uppercase">
                FULL-STACK DEVELOPMENT · KENYA
              </p>
              <h1 className="text-[clamp(48px,5vw,76px)] font-bold text-white leading-[1.05] tracking-tight">
                I build digital products<br />
                that mean business.
              </h1>
              <p className="text-[15px] text-[#94A3B8] leading-[1.7] max-w-[480px]">
                I design and develop fast, responsive websites, e-commerce platforms and custom web applications that help businesses operate, sell and grow online.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#contact"
                className="bg-[#2F80FF] text-white px-6 py-3 rounded-lg hover:bg-[#2F80FF]/95 transition-all duration-300 hover:translate-y-[-1px] font-medium text-[15px] flex items-center justify-center gap-2"
              >
                Start a Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
              <a
                href="#projects"
                className="border border-white/15 text-white px-6 py-3 rounded-lg hover:border-[#2F80FF]/60 hover:text-[#2F80FF] transition-all duration-300 hover:translate-y-[-1px] font-medium text-[15px]"
              >
                View Work
              </a>
            </div>

            <div className="flex items-center gap-2 text-[#94A3B8] text-[13px] pt-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Available for selected projects
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#2F80FF]/10 rounded-lg blur-xl"></div>
              <div className="bg-[#0D1B2A] rounded-xl border border-white/8 p-4 shadow-2xl relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="flex-1 bg-white/5 rounded h-6 ml-2"></div>
                </div>
                <div className="bg-white/5 rounded-lg p-6">
                  <div className="text-[#94A3B8] text-xs mb-4 font-medium">toptankkenya.co.ke</div>
                  <div className="space-y-3">
                    <div className="bg-white/10 rounded h-3 w-full"></div>
                    <div className="bg-white/10 rounded h-3 w-3/4"></div>
                    <div className="bg-white/10 rounded h-3 w-1/2"></div>
                    <div className="bg-[#2F80FF]/20 rounded h-8 w-1/3 mt-4"></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-3 -right-3 bg-[#0D1B2A] rounded-lg border border-white/8 p-3 shadow-xl transform rotate-3">
                <div className="text-[#94A3B8] text-[10px] font-medium">majestycompucarelimited.com</div>
                <div className="flex gap-1 mt-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
