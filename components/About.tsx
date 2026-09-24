export default function About() {
  return (
    <section id="about" className="py-14 md:py-16 bg-[#0D1B2A]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-[clamp(36px,4vw,52px)] font-bold text-white leading-[1.1] mb-3">
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
      </div>
    </section>
  );
}
