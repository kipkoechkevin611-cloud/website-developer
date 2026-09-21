export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#0D1B2A]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            I'm Kevin.<br />
            I turn business problems into software.
          </h2>
          <div className="space-y-4 text-lg text-[#94A3B8] leading-relaxed">
            <p>
              With a Computer Science background and practical full-stack development experience, I focus on building technology that actually solves problems.
            </p>
            <p>
              I don't just write code—I understand how digital systems fit into business operations, customer workflows, and growth strategies. Every project I take on is approached with the question: "How will this help the business achieve its goals?"
            </p>
            <p>
              From responsive interfaces to complex database architectures, payment integrations to API connections, I build complete digital solutions that businesses can rely on.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            <div className="text-center">
              <div className="text-[#2F80FF] text-2xl font-bold mb-1">Full-Stack</div>
              <div className="text-[#94A3B8] text-sm">Development</div>
            </div>
            <div className="text-center">
              <div className="text-[#2F80FF] text-2xl font-bold mb-1">Responsive</div>
              <div className="text-[#94A3B8] text-sm">Interfaces</div>
            </div>
            <div className="text-center">
              <div className="text-[#2F80FF] text-2xl font-bold mb-1">Databases</div>
              <div className="text-[#94A3B8] text-sm">& APIs</div>
            </div>
            <div className="text-center">
              <div className="text-[#2F80FF] text-2xl font-bold mb-1">E-Commerce</div>
              <div className="text-[#94A3B8] text-sm">& Integrations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
