export default function Projects() {
  const projects = [
    {
      category: 'E-COMMERCE',
      name: 'TopTank Kenya',
      description: 'E-commerce experience for water storage solutions, combining product discovery, ordering and customer conversion.',
      technology: ['Next.js', 'React', 'E-commerce', 'API'],
      url: 'https://www.toptankkenya.co.ke/?utm_source=chatgpt.com',
    },
    {
      category: 'BUSINESS TECHNOLOGY',
      name: 'Majesty Compucare',
      description: 'Business technology and e-commerce website for computer and technology solutions with product catalog and ordering system.',
      technology: ['Next.js', 'React', 'API', 'Database'],
      url: 'https://www.majestycompucarelimited.com/?utm_source=chatgpt.com',
    },
    {
      category: 'SERVICE PLATFORM',
      name: 'Career Account Support',
      description: 'Professional business and service platform for career support services with booking system and dashboard.',
      technology: ['Next.js', 'React', 'Supabase', 'API'],
      url: 'https://www.careeraccountsupport.com/?utm_source=chatgpt.com',
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-20 bg-[#07111F]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-[clamp(36px,4vw,52px)] font-bold text-white leading-[1.1] mb-3">
            Selected Work
          </h2>
          <p className="text-base md:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
            Real digital products built around real business needs.
          </p>
        </div>

        <div className="space-y-16 md:space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="bg-[#0D1B2A] rounded-xl border border-white/8 p-6 aspect-video flex items-center justify-center hover:border-[#2F80FF]/40 transition-all duration-300 group hover:scale-[1.02]">
                  <div className="text-center w-full">
                    <div className="text-[#94A3B8] text-xs mb-3">{project.url.replace('https://', '').replace('/?utm_source=chatgpt.com', '')}</div>
                    <div className="bg-white/5 rounded-lg p-5 max-w-md mx-auto">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="bg-white/10 rounded h-3 w-full"></div>
                        <div className="bg-white/10 rounded h-3 w-3/4"></div>
                        <div className="bg-white/10 rounded h-3 w-1/2"></div>
                        <div className="bg-[#2F80FF]/20 rounded h-8 w-1/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} space-y-3`}>
                <div className="text-[#FF8A3D] text-xs font-medium tracking-widest uppercase">
                  0{index + 1} / {project.category}
                </div>
                <h3 className="text-[clamp(28px,3.5vw,42px)] font-bold text-white leading-[1.15]">
                  {project.name}
                </h3>
                <p className="text-base text-[#94A3B8] leading-relaxed">
                  {project.description}
                </p>

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
                    View Live Project →
                  </a>
                  <button className="border border-white/20 text-white px-5 py-2.5 rounded-lg hover:border-[#2F80FF] hover:text-[#2F80FF] transition-all hover:translate-y-[-2px] font-medium text-sm">
                    Case Study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
