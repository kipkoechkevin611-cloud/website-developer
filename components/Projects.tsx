export default function Projects() {
  const projects = [
    {
      name: 'Majesty Compucare',
      description: 'Business technology and e-commerce website for a computer and technology solutions company.',
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
      name: 'TopTank Kenya',
      description: 'E-commerce and business platform for water storage solutions with product catalogues and customer ordering workflows.',
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
    <section id="projects" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Selected Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real projects I've built for businesses and organizations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    What I Built
                  </h4>
                  <ul className="space-y-2">
                    {project.whatIBuilt.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <svg
                          className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Technology
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technology.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700 border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
