export default function Projects() {
  const projects = [
    {
      category: 'E-COMMERCE CONCEPT',
      name: 'TopTank Kenya',
      businessContext: 'E-commerce platform concept for water storage solutions, focusing on product discovery and customer conversion workflows.',
      description: 'Built a responsive e-commerce experience with product catalog, ordering system, and customer conversion paths.',
      technology: ['Next.js', 'React', 'E-commerce', 'API'],
      url: 'https://www.toptankkenya.co.ke/?utm_source=chatgpt.com',
      note: 'Design concept and technical implementation',
    },
    {
      category: 'BUSINESS TECHNOLOGY',
      name: 'Majesty Compucare',
      businessContext: 'ICT retailer and technology service provider serving customers from Nakuru and Kisumu.',
      description: 'Business website and product platform with product catalog, commercial offers, services, and WhatsApp conversion paths.',
      technology: ['Next.js', 'React', 'API', 'Database'],
      url: 'https://www.majestycompucarelimited.com/?utm_source=chatgpt.com',
    },
    {
      category: 'SERVICE PLATFORM',
      name: 'Career Account Support',
      businessContext: 'Professional platform for career support services.',
      description: 'Business and service platform with booking system, dashboard, and customer management workflows.',
      technology: ['Next.js', 'React', 'Supabase', 'API'],
      url: 'https://www.careeraccountsupport.com/?utm_source=chatgpt.com',
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#07111F]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-start gap-4 md:gap-8 mb-12">
          <div className="text-[#FF8A3D] text-5xl md:text-6xl font-bold leading-none">01</div>
          <div className="flex-1">
            <h2 className="text-[clamp(40px,4vw,52px)] font-bold text-white leading-[1.1] mb-3">
              Selected Work
            </h2>
            <p className="text-base md:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
              Digital products built for real businesses.
            </p>
          </div>
        </div>

        <div className="space-y-20 md:space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-[35%_65%] gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-cols-[65%_35%]' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} space-y-4`}>
                <div className="text-[#FF8A3D] text-xs font-medium tracking-widest uppercase">
                  {project.category}
                </div>
                <h3 className="text-[clamp(28px,3.5vw,42px)] font-bold text-white leading-[1.15]">
                  {project.name}
                </h3>
                {project.businessContext && (
                  <p className="text-sm text-[#94A3B8] leading-relaxed italic">
                    {project.businessContext}
                  </p>
                )}
                <p className="text-base text-[#94A3B8] leading-relaxed">
                  {project.description}
                </p>
                {project.note && (
                  <p className="text-xs text-[#94A3B8]/70">
                    {project.note}
                  </p>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.technology.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white/5 border border-white/10 text-[#94A3B8] px-3 py-1 rounded-full text-xs font-medium hover:border-[#2F80FF]/40 hover:text-[#2F80FF] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#2F80FF] text-white px-5 py-2.5 rounded-lg hover:bg-[#2F80FF]/90 transition-all hover:translate-y-[-2px] font-medium text-sm flex items-center gap-2"
                  >
                    Visit Project →
                  </a>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="bg-[#0D1B2A] rounded-xl border border-white/8 aspect-video flex items-center justify-center hover:border-[#2F80FF]/40 transition-all duration-300 group hover:scale-[1.01]">
                  <div className="text-center w-full p-6">
                    <div className="text-[#94A3B8] text-xs mb-4">{project.url.replace('https://', '').replace('/?utm_source=chatgpt.com', '')}</div>
                    <div className="bg-white/5 rounded-lg p-6 max-w-lg mx-auto">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <div className="flex-1 bg-white/5 rounded h-6 ml-2"></div>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded h-3 w-full"></div>
                        <div className="bg-white/10 rounded h-3 w-3/4"></div>
                        <div className="bg-white/10 rounded h-3 w-1/2"></div>
                        <div className="bg-[#2F80FF]/20 rounded h-8 w-1/3 mt-4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
