export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'DISCOVER',
      description: 'Understand the business, users and requirements.',
    },
    {
      number: '02',
      title: 'DESIGN',
      description: 'Plan the structure, UX and interface.',
    },
    {
      number: '03',
      title: 'BUILD',
      description: 'Develop, integrate and test.',
    },
    {
      number: '04',
      title: 'LAUNCH',
      description: 'Deploy and hand over.',
    },
    {
      number: '05',
      title: 'SUPPORT',
      description: 'Maintain and improve.',
    },
  ];

  return (
    <section id="process" className="py-16 md:py-20 bg-[#07111F]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-[clamp(36px,4vw,52px)] font-bold text-white leading-[1.1] mb-3">
            How I Work
          </h2>
        </div>

        <div className="hidden lg:block">
          <div className="relative flex items-center justify-between">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2"></div>
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0D1B2A] border-2 border-[#2F80FF] flex items-center justify-center text-[#2F80FF] font-bold text-sm z-10">
                  {step.number}
                </div>
                <div className="text-center">
                  <h3 className="text-white font-bold text-base mb-1">{step.title}</h3>
                  <p className="text-[#94A3B8] text-xs">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#0D1B2A] border-2 border-[#2F80FF] flex items-center justify-center text-[#2F80FF] font-bold text-xs flex-shrink-0">
                {step.number}
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">{step.title}</h3>
                <p className="text-[#94A3B8] text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
