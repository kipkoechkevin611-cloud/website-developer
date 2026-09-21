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
      title: 'Web Applications',
      description: 'Custom dashboards, portals, management systems and internal business tools.',
    },
    {
      number: '04',
      title: 'Integrations',
      description: 'APIs, databases, WhatsApp, payment systems, email and third-party services.',
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#0D1B2A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            From idea → interface → working system.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#07111F] rounded-2xl border border-white/8 p-8 hover:border-[#2F80FF]/30 transition-all duration-300 group"
            >
              <div className="text-[#FF8A3D] text-5xl font-bold mb-4 group-hover:text-[#2F80FF] transition-colors">
                {service.number}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-[#94A3B8] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
