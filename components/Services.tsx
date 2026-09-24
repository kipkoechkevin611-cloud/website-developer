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
    <section id="services" className="py-16 md:py-20 bg-[#0D1B2A]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-[clamp(36px,4vw,52px)] font-bold text-white leading-[1.1] mb-3">
            What I Build
          </h2>
          <p className="text-base md:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
            From business websites to custom systems, I build digital products around the way your business actually works.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#07111F] rounded-xl border border-white/8 p-6 md:p-8 hover:border-[#2F80FF]/40 transition-all duration-300 group hover:translate-y-[-4px]"
            >
              <div className="text-[#FF8A3D] text-4xl md:text-5xl font-bold mb-3 group-hover:text-[#2F80FF] transition-colors">
                {service.number}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
