export default function AboutTechnology() {
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
    <section id="about" className="py-16 md:py-20 bg-[#07111F]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[45%_55%] gap-8 md:gap-12 items-start">
          <div className="space-y-6">
            <div>
              <h2 className="text-[clamp(40px,4vw,52px)] font-bold text-white leading-[1.1] mb-3">
                Kevin
              </h2>
              <p className="text-[clamp(24px,3vw,32px)] font-bold text-white leading-[1.15] mb-4">
                I turn business problems into software.
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-base text-[#94A3B8] leading-relaxed">
                With a Computer Science background and practical full-stack development experience, I focus on building technology that actually solves problems.
              </p>
              <p className="text-base text-[#94A3B8] leading-relaxed">
                I don't just write code—I understand how digital systems fit into business operations, customer workflows, and growth strategies. Every project I take on is approached with the question: "How will this help the business achieve its goals?"
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-[#FF8A3D] text-xs font-medium tracking-widest uppercase mb-4">
              TECHNOLOGY
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {techCategories.map((category, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-white text-sm font-medium">
                    {category.category}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {category.items.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-[#0D1B2A] border border-white/8 px-2 py-1 rounded text-[#94A3B8] text-xs hover:border-[#2F80FF]/40 hover:text-[#2F80FF] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
