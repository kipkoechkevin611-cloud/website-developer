export default function Technology() {
  const technologies = [
    'Next.js',
    'React',
    'TypeScript',
    'JavaScript',
    'Python',
    'PHP',
    'Node.js',
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Tailwind CSS',
    'GitHub',
    'Vercel',
  ];

  return (
    <section id="technology" className="py-24 md:py-32 bg-[#07111F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tools I use to turn ideas into products.
          </h2>
        </div>

        <div className="flex flex-wrap gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-[#0D1B2A] border border-white/8 px-6 py-3 rounded-full text-[#94A3B8] hover:border-[#2F80FF]/30 hover:text-[#2F80FF] transition-all duration-300"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
