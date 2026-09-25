export default function AboutTechnology() {
  const techCategories = [
    {
      category: 'FRONTEND',
      description: 'React, Next.js, TypeScript, responsive interfaces',
      items: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
    },
    {
      category: 'BACKEND & SYSTEMS',
      description: 'Node, Python, databases, authentication, APIs',
      items: ['Node.js', 'PHP', 'Python', 'APIs'],
    },
    {
      category: 'COMMERCE & INTEGRATIONS',
      description: 'Payments, external APIs, automation',
      items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase'],
    },
    {
      category: 'DEPLOYMENT & SUPPORT',
      description: 'Hosting, optimization, maintenance',
      items: ['GitHub', 'Vercel', 'Docker', 'AWS/Azure'],
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#07111F]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[45%_55%] gap-8 md:gap-12 items-start">
          <div className="space-y-6">
            <div>
              <h2 className="text-[clamp(40px,4vw,52px)] font-bold text-white leading-[1.05] tracking-tight mb-4">
                Kevin
              </h2>
              <p className="text-[clamp(24px,3vw,32px)] font-bold text-white leading-[1.1] tracking-tight mb-5">
                I turn business problems into software.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-[15px] text-[#94A3B8] leading-[1.7]">
                With a Computer Science background and practical full-stack development experience, I focus on building technology that actually solves problems.
              </p>
              <p className="text-[15px] text-[#94A3B8] leading-[1.7]">
                I don't just write code—I understand how digital systems fit into business operations, customer workflows, and growth strategies. Every project I take on is approached with the question: "How will this help the business achieve its goals?"
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-[#FF8A3D] text-[11px] font-medium tracking-[0.2em] uppercase mb-5">
              TECHNICAL CAPABILITIES
            </h3>
            <div className="space-y-5">
              {techCategories.map((category, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="text-white text-[13px] font-medium tracking-tight">
                    {category.category}
                  </h4>
                  <p className="text-[12px] text-[#94A3B8] leading-[1.5]">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {category.items.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-[#0D1B2A] border border-white/8 px-2 py-1 rounded text-[#94A3B8] text-[11px] hover:border-[#2F80FF]/50 hover:text-[#2F80FF] transition-all duration-300"
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
