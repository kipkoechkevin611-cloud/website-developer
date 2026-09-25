export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Business Websites',
      description: 'High-performance websites designed to establish credibility and generate enquiries.',
    },
    {
      number: '02',
      title: 'E-Commerce',
      description: 'Product catalogues, carts, checkout, orders, payments and customer workflows.',
    },
    {
      number: '03',
      title: 'Custom Web Applications',
      description: 'Custom dashboards, portals, management systems and internal business tools.',
    },
    {
      number: '04',
      title: 'API & System Integrations',
      description: 'APIs, databases, WhatsApp, payment systems, email and third-party services.',
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#0D1B2A]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[35%_65%] gap-8 md:gap-12">
          <div>
            <h2 className="text-[clamp(40px,4vw,52px)] font-bold text-white leading-[1.1] mb-3">
              What I Build
            </h2>
            <p className="text-base md:text-lg text-[#94A3B8] leading-relaxed">
              From business websites to custom systems, I build digital products around the way your business actually works.
            </p>
          </div>

          <div className="space-y-1">
            {services.map((service, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 md:gap-6 h-[70px] md:h-[80px] border-b border-white/8 last:border-0 hover:bg-white/[0.02] transition-all duration-300 cursor-pointer"
              >
                <div className="text-[#FF8A3D] text-2xl md:text-3xl font-bold w-12 flex-shrink-0 group-hover:text-[#2F80FF] transition-colors">
                  {service.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8]">
                    {service.description}
                  </p>
                </div>
                <div className="text-[#94A3B8] group-hover:text-[#2F80FF] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
