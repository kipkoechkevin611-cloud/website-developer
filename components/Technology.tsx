export default function Technology() {
  const categories = [
    {
      name: 'Frontend',
      technologies: ['React', 'Next.js', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
    },
    {
      name: 'Backend',
      technologies: ['Node.js', 'PHP', 'API Development', 'REST APIs'],
    },
    {
      name: 'Databases',
      technologies: ['MongoDB', 'MySQL', 'PostgreSQL', 'Supabase'],
    },
    {
      name: 'Infrastructure',
      technologies: ['Vercel', 'GitHub', 'Docker', 'AWS/Azure'],
    },
  ];

  return (
    <section id="technology" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technology Stack
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Modern tools and frameworks I use to build reliable digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-100"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {category.name}
              </h3>
              <div className="space-y-2">
                {category.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
