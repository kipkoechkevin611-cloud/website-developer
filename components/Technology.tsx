export default function Technology() {
  const techCategories = [
    {
      category: 'FRONTEND',
      items: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
    },
    {
      category: 'BACKEND',
      items: ['Node.js', 'PHP', 'Python', 'APIs'],
    },
    {
      category: 'DATABASE',
      items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase'],
    },
    {
      category: 'INFRASTRUCTURE',
      items: ['GitHub', 'Vercel', 'Docker', 'AWS/Azure'],
    },
  ];

  return (
    <section id="technology" className="py-12 md:py-14 bg-[#07111F]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-[clamp(36px,4vw,52px)] font-bold text-white leading-[1.1] mb-3">
            Built with modern technology.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {techCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-[#FF8A3D] text-xs font-medium tracking-widest uppercase mb-3">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#0D1B2A] border border-white/8 px-3 py-1.5 rounded-full text-[#94A3B8] text-xs hover:border-[#2F80FF]/40 hover:text-[#2F80FF] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
