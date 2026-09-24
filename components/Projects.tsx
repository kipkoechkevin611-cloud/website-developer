export default function Projects() {
  const projects = [
    {
      name: 'TopTank Kenya',
      description: 'E-commerce platform for water storage solutions.',
      whatIBuilt: [
        'Responsive frontend',
        'Product catalogue',
        'Shopping cart',
        'Checkout system',
        'Order management',
        'Payment integration',
      ],
      technology: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'MongoDB'],
      url: 'https://www.toptankkenya.co.ke/?utm_source=chatgpt.com',
    },
    {
      name: 'Majesty Compucare',
      description: 'Business technology and e-commerce website for computer and technology solutions.',
      whatIBuilt: [
        'Responsive frontend',
        'Product catalogue',
        'Ordering system',
        'API integration',
        'Admin functionality',
        'Database integration',
      ],
      technology: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'MongoDB'],
      url: 'https://www.majestycompucarelimited.com/?utm_source=chatgpt.com',
    },
    {
      name: 'Career Account Support',
      description: 'Professional business and service platform for career support services.',
      whatIBuilt: [
        'Responsive frontend',
        'Service booking system',
        'User authentication',
        'Dashboard interface',
        'Email notifications',
        'Admin panel',
      ],
      technology: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Supabase'],
      url: 'https://www.careeraccountsupport.com/?utm_source=chatgpt.com',
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#07111F]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Selected Work
          </h2>
          <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl">
            Real products built to solve real business problems.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="bg-[#0D1B2A] rounded-xl border border-white/8 p-8 aspect-video flex items-center justify-center hover:border-[#2F80FF]/30 transition-colors group">
                  <div className="text-center">
                    <div className="text-[#94A3B8] text-sm mb-3">{project.url.replace('https://', '').replace('/?utm_source=chatgpt.com', '')}</div>
                    <div className="bg-white/5 rounded-lg p-6 max-w-md mx-auto">
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

              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} space-y-5`}>
                <div className="text-[#FF8A3D] text-sm font-medium tracking-widest uppercase">
                  PROJECT 0{index + 1}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {project.name}
                </h3>
                <p className="text-lg text-[#94A3B8] leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technology.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white/5 border border-white/10 text-[#94A3B8] px-3 py-1.5 rounded-full text-sm font-medium hover:border-[#2F80FF]/30 hover:text-[#2F80FF] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#2F80FF] text-white px-6 py-3 rounded-lg hover:bg-[#2F80FF]/90 transition-colors font-medium text-base flex items-center gap-2"
                  >
                    View Live Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                  <button className="border border-white/20 text-white px-6 py-3 rounded-lg hover:border-[#2F80FF] hover:text-[#2F80FF] transition-colors font-medium text-base">
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
